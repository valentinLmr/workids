import { elements } from './Base'



const hiddingDiv = (divToHide, divToDisplay) => {
    divToHide.classList.add('hidden');
    divToDisplay.classList.remove('hidden');
}

const clickNextButton = () => {
    elements.nextButton.addEventListener('click', e => {
        if (elements.step.innerHTML == 1) {
            hiddingDiv(elements.statusSelect, elements.infosSignUp)
        }else if (elements.step.innerHTML == 2){
            console.log('todo')
        }
    })
}

export {clickNextButton}