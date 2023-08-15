import { temp404 } from '../templates/temp404.js'
import { setCityTitle } from '../services/setCityTitle.js'
import { ANIMATE, DISPLAY, FORECAST, LEFT_B, RIGHT_B } from '../constants/className.js'

export const rend404 = () => {
    setCityTitle(`Oops! Your location is not found :(`)

    let leftBox = document.querySelector(`.${LEFT_B.LEFT_B}`)
    leftBox.innerHTML = temp404

    let icon = document.querySelector(`.${LEFT_B.MAIN_ICON}`)
    icon.classList.add(`${ANIMATE.ERROR}`)

    const rightValues = document.querySelectorAll(`.${RIGHT_B.ITEM_VAL} > span`)
    rightValues.forEach(item => item.innerHTML = '--')

    const forecast = document.querySelector(`.${FORECAST.FORECAST}`)
    forecast.classList.remove(`${DISPLAY}`)
}