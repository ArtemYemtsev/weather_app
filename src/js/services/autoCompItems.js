import { submitHandler } from '../handlers/submitHandler.js'
import { AUTOCOMP } from '../constants/className.js'

export const autoCompItems = (input) => {
    
    let currentFocus = -1

    input.addEventListener('keydown', e => {
        let list = document.getElementById('autocomplete-list')
        if (list) list = list.getElementsByTagName('LI')
        if(e.keyCode === 40) {
            currentFocus++
            addActive(list)
        } else if (e.keyCode === 38) {
            currentFocus--
            addActive(list)
        } else if (e.keyCode === 13) {
            e.preventDefault()
            if (currentFocus > -1) {
                if (list) {
                    list[currentFocus].click()
                    closeAllLists()
                    currentFocus = -1
                }
            } else if (currentFocus === -1) {
                submitHandler(e)
                closeAllLists()
                currentFocus = -1
            }
        }
    })

    function addActive(list) {
        if (!list) return false;
        removeActive(list);
        if (currentFocus >= list.length) currentFocus = 0;
        if (currentFocus < 0) currentFocus = (list.length - 1);
        list[currentFocus].classList.add(AUTOCOMP.LIST_ITEM_ACTIVE);
    }

    function removeActive(list) {
        for (let i = 0; i < list.length; i++) {
            list[i].classList.remove(AUTOCOMP.LIST_ITEM_ACTIVE);
        }
    }

    function closeAllLists(elmnt) {
        let x = document.getElementsByClassName(AUTOCOMP.LIST_ITEM);
        for (let i = 0; i < x.length; i++) {
            if (elmnt != x[i] && elmnt != input) {
            x[i].parentNode.removeChild(x[i]);
            }
        }
    }
}