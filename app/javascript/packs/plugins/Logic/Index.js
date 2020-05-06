export const increment = (e) => {
    return parseInt(e, 10) + 1
    
}

export const toggleDiv = (divToToggleDisplay, toToggle) => {
    divToToggleDisplay.classList.toggle(toToggle);
}

export const Toclick = (e) => {
    e.click()
}

export const InsertHtml = (e, position, text) => {
    e.insertAdjacentHTML(position, text) 
}

export const completeInputForm = (e, newValue) => {
    e.value = newValue
}