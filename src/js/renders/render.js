import { tempLeftBox } from './rendLeftBox.js'
import { tempRightBox } from './rendRightBox.js'
import { setCityTitle } from '../services/setCityTitle.js'
import { rendForecast } from './rendForecast.js'

export const render = (data) => {
    setCityTitle(data.city.name)
    tempLeftBox(data.list[0])
    tempRightBox(data.list[0], [data.city.sunrise, data.city.sunset])
    rendForecast(data)
}