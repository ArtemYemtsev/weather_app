import { rendLeftBox } from './rendLeftBox.js'
import { rendRightBox } from './rendRightBox.js'
import { setCityTitle } from '../services/setCityTitle.js'
import { rendForecast } from './rendForecast.js'

export const render = (data) => {
    setCityTitle(data.city.name)
    rendLeftBox(data.list[0])
    rendRightBox(data.list[0], [data.city.sunrise, data.city.sunset])
    rendForecast(data)
}