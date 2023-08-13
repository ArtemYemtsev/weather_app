import { temp404 } from '../templates/temp404.js'
import { setCityTitle } from '../services/setCityTitle.js'

export const rend404 = (req) => {
    setCityTitle(`Oops! Your location is not found :(`)

    let leftBox = document.querySelector(`.weather__inner__left__box`)
    leftBox.innerHTML = temp404

    
}