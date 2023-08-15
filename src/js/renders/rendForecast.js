import { DISPLAY, FORECAST } from "../constants/className.js"
import { date } from "../services/date.js"
import { tempForecast } from '../templates/tempForecast.js'

export const rendForecast = (data) => {
    
    const LIST = data.list
    const DATA = []

    for (let i = 1; i < LIST.length; i++) {
        const DATA_TEMP = {
            day: date(LIST[i].dt),
            time: date(LIST[i].dt, 'time'),
            icon: LIST[i].weather[0].icon,
            temp: Math.round(LIST[i].main.temp),
            wind: Math.round(LIST[i].wind.speed),
            pop: Math.round(LIST[i].pop*100)
        }
        DATA.push(tempForecast(DATA_TEMP))
    }
    const forecastBlock = document.querySelector(`.${FORECAST.FORECAST}`)
    forecastBlock.classList.add(`${DISPLAY}`)
    
    const forecast = document.querySelector(`.${FORECAST.INNER_LIST}`)
    forecast.innerHTML = DATA.join('')
}