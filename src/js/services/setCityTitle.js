export const setCityTitle = (title) => {
    let cityTitle = document.querySelector(".weather__inner__left__title")
    cityTitle.textContent = `${title}`
}