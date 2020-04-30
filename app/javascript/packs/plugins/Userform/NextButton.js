import { elements } from './Base'



const increment = (e) => {
    let stepInteger = parseInt(e.dataset.step, 10)
    e.dataset.step = stepInteger += 1
    }

const hiddingDiv = (divToHide, divToDisplay) => {
    divToHide.classList.add('hidden');
    divToDisplay.classList.remove('hidden');
}

const clickNextButton = () => {
    if(elements.nextButton){
        elements.nextButton.addEventListener('click', e => {
            if (elements.step.dataset.step == 1) {
                hiddingDiv(elements.statusSelect, elements.infosSignUp)
                increment(elements.step)
            }else if (elements.step.innerHTML == 2){
                hiddingDiv(elements.infosSignUp,)
                increment(elements.step)
            }
        })
    }
}

export {clickNextButton}