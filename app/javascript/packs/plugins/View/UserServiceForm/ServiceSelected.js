import { elements } from '../Base';
import * as Index from '../../Logic/Index' ;


const arrayObjService = []
const arrayIds = []


const addIdToArray = (el) => {

    const id = el.dataset.id;
    const  icon = el.dataset.icon;
    const select = el.dataset.select;

    if (arrayIds.includes(id) == false){
        arrayIds.push(id)
        arrayObjService.push({id:id, icon:icon}); 
        el.innerHTML = `<img style='text-align:center' width="100" src="/assets/${select}">`;
    }else{
        for (let i = 0; i < arrayObjService.length; i++) {
            let obj = arrayObjService[i]
            if (obj.id == id) {
                arrayObjService.splice(i, 1);
                arrayIds.splice(arrayIds.indexOf(id), 1);
                el.innerHTML = `<img style='text-align:center' width="100" src="/assets/${icon}">`
            }
        }
    }
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
            Index.InsertHtml(elements.divFormUserServiceIcon, 'afterbegin',`<img style='text-align:center' width="100" src="/assets/${arrayObjService[step].icon}">`)
            Index.completeInputForm(elements.service_id_input, arrayObjService[step].id)
            elements.stepUserService.dataset.step = Index.increment(elements.stepUserService.dataset.step)
            
    }else if (elements.stepUserService.dataset.step < arrayObjService.length && document.getElementById('user_service_description').value != "" && document.getElementById('user_service_price').value != ""){    
        Index.Toclick(elements.submitUserService)
        cleanFormUser()
        Index.InsertHtml(elements.divFormUserServiceIcon, 'afterbegin',`<img style='text-align:center' width="100" src="/assets/${arrayObjService[step].icon}">`)
        Index.completeInputForm(elements.service_id_input, arrayObjService[step].id)
        elements.stepUserService.dataset.step =  Index.increment(elements.stepUserService.dataset.step)
        console.log(elements.stepUserService.dataset.step)
    }else if (elements.stepUserService.dataset.step = arrayObjService.length && document.getElementById('user_service_description').value != "" && document.getElementById('user_service_price').value != ""){
        document.querySelector('.dashboard-link').click()
   }
}
 
const ServicesSelected = () => {
    if(elements.divIdsService){
        elements.divIdsService.addEventListener('click', e => {
            const element = e.target.closest('.serviceIcon');
            // selectingIcon(element)
            addIdToArray(element)
        })
        elements.nextButton.addEventListener('click', e => {
            displayNewFormUserService(); 
        })
    }      
}
export { ServicesSelected }

