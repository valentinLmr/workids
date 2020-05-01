import { elements } from '../View/Base'
import { element } from 'prop-types'

export const increment = (e) => {
    let stepInteger = parseInt(e.dataset.step, 10)
    e.dataset.step = stepInteger += 1
    }

export const hiddingDiv = (divToHide, divToDisplay) => {
    divToHide.classList.add('hidden');
    divToDisplay.classList.remove('hidden');
}

export const validation = () => {
    console.log('je suis dans validation')
    elements.validationSignup.click()
}

