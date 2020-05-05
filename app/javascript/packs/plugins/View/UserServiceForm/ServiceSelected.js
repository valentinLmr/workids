import { elements } from '../Base';
import * as Index from '../../Logic/Index' ;


const IdsArray = []

const addIdToArray = (id) => {
    if (IdsArray.includes(id) == false){
    IdsArray.push(id)}
    console.log(IdsArray)
}

const cleanFormUser = () => {
    elements.inputFormUserServices.forEach(el => {
        el.value = ''
    })
}

const displayNewFormUserService = () => {
    const step = parseInt(elements.stepUserService.dataset.step, 10)

    if (elements.stepUserService.dataset.step == 0 ){
        Index.toggleDiv(elements.divIdsService, 'hidden')
        Index.toggleDiv(elements.divFormUserService, 'hidden')
        elements.service_id_input.value = IdsArray[step]
        elements.stepUserService.dataset.step = Index.increment(elements.stepUserService.dataset.step)
    }else{
        elements.service_id_input.value = IdsArray[step]
        Index.increment(elements.stepUserService.dataset.step)
    } 
}
 
const ServicesSelected = () => {
    if(elements.divIdsService){
        elements.divIdsService.addEventListener('click', e => {
            addIdToArray(e.target.dataset.id)
        })
        
        elements.nextButton.addEventListener('click', e => {
             if (elements.stepUserService.dataset.step < IdsArray.length && elements.stepUserService.dataset.step > 0 ){
                Index.Toclick(elements.submitUserService)
                cleanFormUser()
                displayNewFormUserService();
            } else if( elements.stepUserService.dataset.step == 0 ) {    
                console.log(elements.stepUserService.dataset.step)
                displayNewFormUserService();
            } else {
                Index.Toclick(elements.submitUserService)
                cleanFormUser()
                console.log('will go to dashboard')
            }   
        })  
    } 
}
export { ServicesSelected }