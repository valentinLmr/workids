import { elements } from '../Base'

const IdsArray = []
 
const ServicesSelected = () => {
    if(elements.divIdsService){
        console.log('hello')
        elements.divIdsService.addEventListener('click', e => {
            const IdSelected = e.target.dataset.id
            if (IdsArray.includes(IdSelected) == false){
            IdsArray.push(e.target.dataset.id)}
        })
        elements.nextButton.addEventListener('click', e => {
            elements.divIdsService.classList.add('hidden')
            elements.divIdsService.insertAdjacentHTML(beforeend,'hidden')


            console.log(IdsArray.length)
        })
    } 
}

export { ServicesSelected }