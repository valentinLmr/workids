import {elements} from '../Base'
import * as Index from '../../Logic/Index'

const searchId = () => { 
    elements.searchIdsService.addEventListener('click', e => {
        console.log(e.target)
        const element = e.target.closest('h2');
        e.target.classList.toggle('active')
        Index.completeInputForm(elements.searchServiceInput, element.dataset.name)
        console.log(elements.searchServiceInput.value)
    })
}



const SearchService = () => {
    if(elements.SelectServiceToSearch){
       searchId()
    }
}

export { SearchService }