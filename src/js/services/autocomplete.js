import { getCities } from "./getCities.js";
import { submitHandler } from "../handlers/submitHandler.js";

export const autocomplete = (input, list) => {
    
    let timer

    function findMatches(e) {
        if (e.keyCode !== 38 || e.keyCode !== 40 || e.keyCode !== 13) {
            clearTimeout(timer)
            if(e.target.value) {

                timer = setTimeout(() => {
                        getCities(e.target.value)
                        .then(data => renderCityList(data))
                        .catch(error => console.error(error))
                    }, 600)

            } else list.innerHTML = ''
        }
    }

    function renderCityList(data) {

        list.innerHTML = ''

        for(let item in data ) {
            const li = document.createElement('LI')
            li.classList.add('autocomplete__list__item')
            li.classList.add('input__item')
            li.innerHTML = `${data[item].name}`
            li.setAttribute('id', `${data[item].name}`)
            list.appendChild(li)
        }
    }
    
    list.addEventListener('click', e => {
        input.value = e.target.id
        list.innerHTML = ''
        submitHandler(e)
    })

    input.addEventListener('input', e => findMatches(e))
}