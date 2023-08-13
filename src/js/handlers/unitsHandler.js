import { getWeather } from "../services/getWeather.js"
import { render } from "../renders/render.js"

export const unitsHandler = (event) => {
    event.preventDefault()
    const input = document.querySelectorAll("#input-search")

    if (input[0].value !== '') {
        const units = document.querySelectorAll("input[name=units]:checked")
        const query = {
            city: input[0].value,
            units: units[0].value,
        }
        getWeather(query).then(data => render(data))
    }
}