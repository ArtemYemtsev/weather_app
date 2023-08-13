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
            pop: LIST[i].pop*100,
        }
        console.log(DATA_TEMP.day)
        DATA.push(tempForecast(DATA_TEMP))
    }

    const forecast = document.querySelector('.forecast__inner__list')
    forecast.innerHTML = DATA.join('')
}