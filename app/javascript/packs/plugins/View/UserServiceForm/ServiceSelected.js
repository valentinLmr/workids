import { elements } from '../Base';
import * as Index from '../../Logic/Index' ;


const IdsArray = []

const addIdToArray = (id, icon) => {
    if (IdsArray.includes(id) == false){
    IdsArray.push({id:id, icon:icon})}
    console.log(IdsArray)
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
        Index.InsertHtml(elements.divFormUserServiceIcon, 'afterbegin',`<img style='text-align:center' width="100" src="/assets/${IdsArray[step].icon}">`)
        Index.completeInputForm(elements.service_id_input, IdsArray[step].id)
        elements.stepUserService.dataset.step = Index.increment(elements.stepUserService.dataset.step)
        console.log(elements.stepUserService.dataset.step)
        console.log(step)
        console.log(IdsArray[step])
    }else{
        Index.InsertHtml(elements.divFormUserServiceIcon, 'afterbegin',`<img style='text-align:center' width="100" src="/assets/${IdsArray[step].icon}">`)
        Index.completeInputForm(elements.service_id_input, IdsArray[step].id)
        elements.stepUserService.dataset.step =  Index.increment(elements.stepUserService.dataset.step)
        console.log(elements.stepUserService.dataset.step)
        console.log(step)
        console.log(IdsArray[step])
    } 
}
 
const ServicesSelected = () => {
    if(elements.divIdsService){
        elements.divIdsService.addEventListener('click', e => {
            const element = e.target.closest('.serviceIcon');
            console.log(element)
            addIdToArray(element.dataset.id, element.dataset.icon)
        })
    }
    
    if(elements.divFormUserService) {
        elements.nextButton.addEventListener('click', e => {
             if (elements.stepUserService.dataset.step < IdsArray.length && elements.stepUserService.dataset.step > 0 ){
                Index.Toclick(elements.submitUserService)
                cleanFormUser()
                displayNewFormUserService();
            } else if( elements.stepUserService.dataset.step == 0 ) {    
                displayNewFormUserService();
            } else {
                Index.Toclick(elements.submitUserService)
                cleanFormUser()
            }   
        }) 
    } 
}
export { ServicesSelected }