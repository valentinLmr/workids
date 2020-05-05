import {elements} from '../View/Base'
// import { element } from 'prop-types'
export const increment = (e) => {
    return parseInt(e, 10) + 1
    
//    elements.stepUserService.dataset.step = dataSetToIntegerIncrementing
}

export const toggleDiv = (divToToggleDisplay, toToggle) => {
    divToToggleDisplay.classList.toggle(toToggle);
}

export const Toclick = (e) => {
    console.log('je suis dans validation')
    e.click()
}

export const InsertHtml = (e, position, text) => {
    e.insertAdjacentHTML(position, text) 
}

export const cleanUp = e => {
    e = ''
}