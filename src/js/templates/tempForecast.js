import { FORECAST } from "../constants/className.js"

export const tempForecast = (data) => {
    const units = document.querySelectorAll("input[name=units]:checked")
    
    return `<li class="${FORECAST.LIST_ITEM}">
                        <div class="${FORECAST.DAY_TIME}">
                            <div>${data.day}</div>
                            <div>${data.time}</div>
                        </div>
                        <div class="${FORECAST.DATA}">
                            <div class="${FORECAST.ITEM_ICON} ${FORECAST.DATA_ITEM}">
                                <svg  class="weather__inner__right__item__icon">
                                    <use xlink:href="img/icons/icons.svg#${data.icon}"></use>
                                </svg>
                            </div>

                            <div class="${FORECAST.ITEM_TEMP} ${FORECAST.DATA_ITEM}">
                                <h3 class="${FORECAST.ITEM_TITLE}">temp</h3>
                                <div><span>${data.temp}</span>&deg;</div>
                            </div>

                            <div class="${FORECAST.ITEM_WIND} ${FORECAST.DATA_ITEM}">
                                <h3 class="${FORECAST.ITEM_TITLE}">wind</h3>
                                <div><span>${data.wind}</span>${units[0].value === 'imperial' ? 'mph':'m/s'}</div>
                            </div>

                            <div class="${FORECAST.ITEM_POP} ${FORECAST.DATA_ITEM}">
                                <h3 class="${FORECAST.ITEM_TITLE}">pop</h3>
                                <div><span>${data.pop}</span>&#37;</div>
                            </div>
                        </div>
                    </li>`
}