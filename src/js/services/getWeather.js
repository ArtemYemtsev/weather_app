import { URL } from "../constants/url.js"
import { rend404 } from "../renders/rend404.js"
import { rendLoader } from "../renders/rendLoader.js"

export const getWeather = async (props) => {
    rendLoader()
    try{
        const res = await fetch(`${URL.BASE}${props.city}${URL.UNITS}${props.units}${URL.APPID}`)
        const data = await res.json()
        if(data.cod !== '200') {
            rend404(data)
        } 
        else return data
    } catch (error) {
        console.error(error)
    }
}