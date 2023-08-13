import { date } from '../services/date.js'

export const tempRightBox = (data, sun) => {
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
        'AM',
        'PM'
    ]

    let renderRightBox = []

    for (let i = 0; i < TITLE_RIGHT_BOX.length; i++) {
        renderRightBox.push(
            `<div class="weather__inner__right__item">
                <svg  class="weather__inner__right__item__icon">
                    <use xlink:href="./img/icons/icons.svg#${ICONS_RIGHT_BOX[i]}"></use>
                </svg>
                <div class="weather__inner__right__item__label">
                    ${TITLE_RIGHT_BOX[i]}
                </div>
                <div class="weather__inner__right__item__value"><span>${DATA[i]}</span>${UNIT[i]}</div>
            </div>`
        )
    }

    let rightBox = document.querySelector(".weather__inner__right")
    rightBox.innerHTML = renderRightBox.join('')
}