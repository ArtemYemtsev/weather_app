import { LEFT_B } from "../constants/className.js"


export const rendLeftBox = (data) => {
    
    const units = document.querySelectorAll("input[name=units]:checked")
    const DATA = {
        icon: data.weather[0].icon,
        temp: Math.round(data.main.temp),
        description: data.weather[0].description,
        units: units[0].value
    }

    const template = `<div class="${LEFT_B.MAIN}">
                        <svg  class="${LEFT_B.MAIN_ICON}">
                            <use xlink:href="img/icons/icons.svg#${DATA.icon}"></use>
                        </svg>
                        <div class="${LEFT_B.MAIN_TEMP}">
                            <div class="${LEFT_B.MAIN_TEMP_VAL}">
                                <span>${DATA.temp}</span>&deg;
                            </div>
                            <svg  class="${LEFT_B.MAIN_TEMP_ICON}">
                                <use xlink:href="img/icons/icons.svg#${DATA.units}"></use>
                            </svg>
                        </div>
                        <p class="${LEFT_B.MAIN_TEMP_DESC}">${DATA.description}</p>
                    </div>`
    let leftBox = document.querySelector(`.${LEFT_B.LEFT_B}`)
    leftBox.innerHTML = template
}