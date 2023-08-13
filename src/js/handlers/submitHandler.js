import { getWeather } from "../services/getWeather.js"
import { render } from "../renders/render.js"

export const submitHandler = (event) => {
    event.preventDefault()
    const input = document.querySelectorAll("#input-search")

    const units = document.querySelectorAll("input[name=units]:checked")
    const query = {
        city: input[0].value,
        units: units[0].value,
    }
    getWeather(query)
        .then(data => render(data))
        .catch(error => console.error(error))
}