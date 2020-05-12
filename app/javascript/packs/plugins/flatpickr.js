import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";


flatpickr(".datepicker", {
    altInput: true,
    minDate: "today",
    dateFormat: "Y-m-d",
    disableMobile: true
});


let availabilities = flatpickr(".availability", {
    onChange: console.log('selectedDates'),
    minDate: "today",
    dateFormat: "d-m-Y",
    disableMobile: true,
    inline: true,
    mode: 'multiple'
});


const insertFormDate = (dateArraySorted) => {
    document.querySelector('.test').innerHTML = ''
    dateArraySorted.forEach(e => {
        const formToInsert = 
        `<div class='date'>
           <form action="/availabilities" accept-charset="UTF-8" method="post">
               <input type="hidden" name="authenticity_token" value="RresswU2R6wqxSwKKrONWUsMJRFIxyHrklcbPBWR98hR4on+YU9fSeB6xFjD6phZDQY+ULZFMBEvp6SDprWinw=="/>
               <input type="text" name="availability[date]" value=${e} class='date-input'/>
               <p>from</p>
               <input type="time" name="availability[start_time]" class='time-input' />
               <p>to</p>
               <input type="time" name="availability[end_time]" class='time-input'/>
               <button type="submit">
                   <i class="fas fa-check"></i>
               </button>
                 
           </form>
        </div>`
         document.querySelector('.test').insertAdjacentHTML('beforeend', formToInsert )
    })
}
let datesValidated = []
document.querySelector('.inputDate').addEventListener('change', e => {
    
    
    let date = e.target.value.split(',').map(e => e.trim()).sort();

    if(datesValidated.length == 0){
        console.log('will send form')
        insertFormDate(date)
        
    } else {
        datesValidated.forEach(datevalidated => {
            if(date.includes(datesValidated)){
               let indexDateValidated = date.indexOf(datevalidated);
               console.log(indexDateValidated)
               console.log(datevalidated)
               console.log(date[1])
               date.splice(indexDateValidated, 1)
               insertFormDate(date) 
            } else {
                console.log('to delete')
            }
        })
    }

    if(document.querySelector('.date')){
        document.querySelector('.date').addEventListener('click', e => {
            const divParent = e.target.closest('div')
            const formDate = e.target.closest('form')
            const inputDate = formDate.children[1].value

            console.log(divParent)
            divParent.classList.add('hidden')
            datesValidated.push(inputDate)
            console.log(datesValidated)
        })
    }
    

    
})