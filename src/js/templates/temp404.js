import { LEFT_B } from "../constants/className.js"

export const temp404 = `
    <div class="${LEFT_B.MAIN}">
        <svg  class="${LEFT_B.MAIN_ICON}">
            <use xlink:href="img/icons/icons.svg#404"></use>
        </svg>
        <div class="${LEFT_B.MAIN_TEMP}">
            <div class="${LEFT_B.MAIN_TEMP_VAL}">
                <span>--</span>&deg;
            </div>
            <svg  class="${LEFT_B.MAIN_TEMP_ICON}">
                <use xlink:href="img/icons/icons.svg#metric"></use>
            </svg>
        </div>
        <p class="${LEFT_B.MAIN_TEMP_DESC}">Please, try again!</p>
    </div>`