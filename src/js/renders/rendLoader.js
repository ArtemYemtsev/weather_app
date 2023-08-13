export const rendLoader = () => {
    let icon = document.querySelector('.weather__inner__left__box__main__icon')
    console.log(icon)
    icon.innerHTML = '<use xlink:href="./img/icons/icons.svg#satellite"></use>'
    icon.classList.add('loader-satellite')
}