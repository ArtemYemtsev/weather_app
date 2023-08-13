export const tempLeftBox = (data) => {
    
    const units = document.querySelectorAll("input[name=units]:checked")
    const DATA = {
        icon: data.weather[0].icon,
        temp: Math.round(data.main.temp),
        description: data.weather[0].description,
        units: units[0].value
    }

    const template = `<div class="weather__inner__left__box__main">
                        <svg  class="weather__inner__left__box__main__icon">
                            <use xlink:href="./img/icons/icons.svg#${DATA.icon}"></use>
                        </svg>
                        <div class="weather__inner__left__box__main__temp">
                            <div class="weather__inner__left__box__main__temp__value">
                                <span>${DATA.temp}</span>&deg;
                            </div>
                            <svg  class="weather__inner__left__box__main__temp__icon">
                                <use xlink:href="./img/icons/icons.svg#${DATA.units}"></use>
                            </svg>
                        </div>
                        <p class="weather__inner__left__box__main__description">${DATA.description}</p>
                    </div>`
    let leftBox = document.querySelector(".weather__inner__left__box")
    leftBox.innerHTML = template
}