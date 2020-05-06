import { elements } from '../Base';
import * as Index from '../../Logic/Index' ;


const IdsArray = []

const addIdToArray = (id, icon) => {
    if (IdsArray.includes(id) == false){
    IdsArray.push({id:id, icon:icon})}
    console.log(IdsArray[0].id)
    console.log(IdsArray[0].icon)
}

const cleanFormUser = () => {
    elements.inputFormUserServices.forEach(el => {
        el.value = ''
    })

    elements.divFormUserServiceIcon.innerHTML=('')
}

const displayNewFormUserService = () => {
    const step = parseInt(elements.stepUserService.dataset.step, 10)

    if (elements.stepUserService.dataset.step == 0 ){
        Index.toggleDiv(elements.divIdsService, 'hidden')
        Index.toggleDiv(elements.divFormUserService, 'hidden')
        Index.InsertHtml(elements.divFormUserServiceIcon, 'afterbegin',`<img width="200" src="/assets/${IdsArray[step].icon}">`)
        elements.service_id_input.value = IdsArray[step].id
        elements.stepUserService.dataset.step = Index.increment(elements.stepUserService.dataset.step)
    }else{
        Index.InsertHtml(elements.divFormUserServiceIcon, 'afterbegin',`<img width="200" src="/assets/${IdsArray[step].icon}">`)
        elements.service_id_input.value = IdsArray[step].id
        Index.increment(elements.stepUserService.dataset.step)
    } 
}
 
const ServicesSelected = () => {
    if(elements.divIdsService){
        elements.divIdsService.addEventListener('click', e => {
            const element = e.target.closest('.serviceIcon');
            addIdToArray(element.dataset.id, element.dataset.icon)
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
            }   
        })  
    } 
}
export { ServicesSelected }