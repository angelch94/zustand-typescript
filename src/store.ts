import create from 'zustand'

type State = {
    countries: string[]
    getAllCountries: () => void
    setCountry: (country: string) => void
}
  
export const useStore = create<State>(set => ({
    countries: [],
    getAllCountries: async () => {
        const countries = await getAllCountries()
        set( state => ({ countries }))
    },
    setCountry: (country: string) => set ( state => ({ countries: [...state.countries, country]}))
}))

export const getAllCountries = async () => {
    try {
        const response: any = await fetch("https://api.first.org/data/v1/countries")
        if(response.ok){
            let json = await response.json()
            const data = json.data
            let countries = []
            for(let countryCode in data) {
                const countryName = data[countryCode].country
                countries.push(countryName)
            }
            return countries
        } else {
            console.error("HTTP-ERROR:" + response.status)
        }
    } catch (e) {
        console.error("ERROR GETTING ALL COUNTRIES", e)
    }
}
