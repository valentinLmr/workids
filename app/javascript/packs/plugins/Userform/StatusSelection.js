import { elements } from './Base'

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

const selectStatus = () => {

    if(elements.statusSelect){
        elements.statusSelect.addEventListener('click', e => {
            e.target.classList.add("clicked")
            addStatusToForm(e.target)
            workidzQuestion();
        })
    }
}

export {selectStatus}