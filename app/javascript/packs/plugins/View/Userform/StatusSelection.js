import { elements } from '../Base' ;
import * as Index from '../../Logic/Index' ;

const addStatusToForm = (e) => {
    const result = e.innerText
    elements.statusForm.value = result
}

const workidzQuestion = () => {
    if(elements.workidzQuestion){
        console.log(elements.statusForm.value)
        elements.statusForm.value == "Worker" ? elements.workidzQuestion.classList.remove('hidden') : elements.workidzQuestion.classList.add('hidden')
        
    }
}

const nextButtonUser = () =>{   
    elements.nextButton.addEventListener('click', e => {
        if (elements.stepRegistration.dataset.step == 1) {
            Index.toggleDiv(elements.statusSelect, 'hidden')
            Index.toggleDiv(elements.infosSignUp, 'hidden')
            elements.stepRegistration.dataset.step = Index.increment(elements.stepRegistration.dataset.step)
        }else if (elements.stepRegistration.dataset.step == 2){
            Index.toggleDiv(elements.infosSignUp, 'hidden')
            Index.toggleDiv(elements.profil, 'hidden')
            elements.stepRegistration.dataset.step =  Index.increment(elements.stepRegistration.dataset.step)
        }else if (elements.stepRegistration.dataset.step == 3){
            Index.Toclick(elements.validationSignup)
        }
    
    })
}

const selectStatus = () => {

    if(elements.statusSelect){
        elements.statusSelect.addEventListener('click', e => {
            e.target.classList.add("clicked")
            addStatusToForm(e.target)
            workidzQuestion();
        })
        nextButtonUser()    
    } 
}   

export {selectStatus}