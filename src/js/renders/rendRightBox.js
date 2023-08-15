import { date } from '../services/date.js'
import { RIGHT_B } from '../constants/className.js'

export const rendRightBox = (data, sun) => {
    const units = document.querySelectorAll("input[name=units]:checked")
    const DATA = [
        Math.round(data.main.temp_max),
        Math.round(data.main.temp_min),
        Math.round(data.wind.speed),
        data.wind.deg,
        data.main.humidity,
        data.pop*100,
        date(sun[0], 'time'),
        date(sun[1], 'time')
    ]

    const TITLE_RIGHT_BOX = [
        'max temp', 
        'min temp', 
        'wind speed', 
        'wind deg',
        'humidity',
        'pop',
        'sun rise',
        'sun set'
    ]

    const ICONS_RIGHT_BOX = [
        units[0].value,
        units[0].value,
        'wind',
        'wind-deg',
        'humidity',
        'percip',
        'sun-rise',
        'sun-set'
    ]

    const UNIT = [
        '&deg;',
        '&deg;',
        units[0].value === 'imperial' ? 'mph':'m/s',
        '&deg;',
        '&#37;',
        '&#37;',
        ' ',
        ' '
    ]

    let renderRightBox = []

    for (let i = 0; i < TITLE_RIGHT_BOX.length; i++) {
        renderRightBox.push(
            `<div class="${RIGHT_B.ITEM}">
                <svg  class="${RIGHT_B.ITEM_ICON}">
                    <use xlink:href="img/icons/icons.svg#${ICONS_RIGHT_BOX[i]}"></use>
                </svg>
                <div class="${RIGHT_B.ITEM_LABEL}">
                    ${TITLE_RIGHT_BOX[i]}
                </div>
                <div class="${RIGHT_B.ITEM_VAL}"><span>${DATA[i]}</span> ${UNIT[i]}</div>
            </div>`
        )
    }

    let rightBox = document.querySelector(`.${RIGHT_B.INNER}`)
    rightBox.innerHTML = renderRightBox.join('')
}