import { elements } from '../Base' ;
import * as Index from '../../Logic/Index' ;

const addStatusToForm = (e) => {
    const result = e.innerText
    elements.statusForm.value = result
    console.log(elements.statusForm.value)
}

const workidzQuestion = () => {
    if(elements.workidzQuestion){
        console.log(elements.statusForm.value)
        elements.statusForm.value == "Worker" ? elements.workidzQuestion.classList.remove('hidden') : elements.workidzQuestion.classList.add('hidden')
        
    }
}

const nextButtonUser = () =>{   
    elements.nextButton.addEventListener('click', e => {
        if (elements.step.dataset.step == 1) {
            Index.toggleDiv(elements.statusSelect, 'hidden')
            Index.toggleDiv(elements.infosSignUp, 'hidden')
            Index.increment(elements.step.dataset.step)
        }else if (elements.step.dataset.step == 2){
            Index.toggleDiv(elements.infosSignUp, 'hidden')
            Index.toggleDiv(elements.profil, 'hidden')
            Index.increment(elements.step.dataset.step)
        }else if (elements.step.dataset.step == 3){
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