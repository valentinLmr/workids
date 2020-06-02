

const handleDate = () => {
    console.log(document.querySelector('.slider'))

    document.querySelectorAll('.slider').forEach(el => {
        el.addEventListener('click', e => {

            e.target.parentNode.parentNode.classList.toggle('activedate')
            e.target.parentElement.parentElement.previousElementSibling.classList.toggle('activedate')
           e.target.insertAdjacentHTML('beforebegin', (`<div>
                                                     <form style='width: auto'> 
                                                        <input></input>
                                                        <input></input>
                                                      </form>
                                                    </div>`))
            
        })

    })
}

export {handleDate}