import { ANIMATE, LEFT_B } from "../constants/className.js"

export const rendLoader = () => {
    let icon = document.querySelector(`.${LEFT_B.MAIN_ICON}`)
    icon.innerHTML = '<use xlink:href="img/icons/icons.svg#satellite"></use>'
    icon.classList.add(`${ANIMATE.LOADER}`)
}