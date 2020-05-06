import {elements} from '../Base'
import * as Index from '../../Logic/Index'

const SearchService = () => {
    if(elements.searchIdsService){
        elements.searchIdsService.addEventListener('click', e => {
            const element = e.target.closest('.serviceIcon');
            Index.completeInputForm(elements.searchServiceInput, element.dataset.name)
        })
    }
}

export { SearchService }