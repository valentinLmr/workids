import { elements } from './Base'

const addStatusToForm = (e) => {
    const result = e.innerText
    elements.statusForm.value = result
    console.log(elements.statusForm.value)
}

const selectStatus = () => {
    elements.statusSelect.addEventListener('click', e => {
        e.target.classList.add("active")
        addStatusToForm(e.target)
    })
}

export {selectStatus}