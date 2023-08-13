export const tempForecast = (data) => {
    const units = document.querySelectorAll("input[name=units]:checked")
    
    return `<li class="forecast__inner__list__item">
                        <div class="forecast__inner__list__item__day-time">
                            <div>${data.day}</div>
                            <div>${data.time}</div>
                        </div>

                        <div class="forecast__inner__list__item__icon">
                            <svg  class="weather__inner__right__item__icon">
                                <use xlink:href="./img/icons/icons.svg#${data.icon}"></use>
                            </svg>
                        </div>

                        <div class="forecast__inner__list__item__temp">
                            <h3 class="forecast__inner__list__item__title">temp</h3>
                            <div><span>${data.temp}</span>&deg;</div>
                        </div>

                        <div class="forecast__inner__list__item__wind">
                            <h3 class="forecast__inner__list__item__title">wind</h3>
                            <div><span>${data.wind}</span>${units[0].value === 'imperial' ? 'mph':'m/s'}</div>
                        </div>

                        <div class="forecast__inner__list__item__pop">
                            <h3 class="forecast__inner__list__item__title">pop</h3>
                            <div><span>${data.pop}</span>&#37;</div>
                        </div>
                    </li>`
}