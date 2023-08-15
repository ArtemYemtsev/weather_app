import { ANIMATE, LEFT_B } from "../constants/className.js"

export const setCityTitle = (title) => {
    let cityTitle = document.querySelector(`.${LEFT_B.TITLE}`)
    cityTitle.textContent = `${title}`
    cityTitle.classList.add(`${ANIMATE.CITY_NAME}`)
    setTimeout(() => {
        cityTitle.classList.remove(`${ANIMATE.CITY_NAME}`)
    }, 1000)
}