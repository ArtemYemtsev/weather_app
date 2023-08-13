import { submitHandler } from "./handlers/submitHandler.js"
import { unitsHandler } from "./handlers/unitsHandler.js"

const form = document.getElementById('form')
form.addEventListener('submit', e => submitHandler(e))

const unit = document.querySelectorAll(".header__inner__units__input")
unit.forEach(element => {
    element.addEventListener('change', e => unitsHandler(e))
});