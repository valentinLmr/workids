import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";


flatpickr(".datepicker", {
    altInput: true,
    minDate: "today",
    dateFormat: "Y-m-d",
    disableMobile: true
});


if(document.querySelector('.test')){
    const arrayDatesCreated = JSON.parse(document.querySelector('.test').dataset.availabilities)
    const todisbale = []
    
    arrayDatesCreated.forEach(el => todisbale.push(new Date(el.date)))

    let availabilities = flatpickr(".availability", {
        onChange: console.log('selectedDates'),
        minDate: "today",
        dateFormat: "d-m-Y",
        disableMobile: true,
        inline: true,
        mode: 'multiple',
        "disable": todisbale
    });







const insertFormDate = (dateArraySorted) => {
    document.querySelector('.test').innerHTML = ''
    dateArraySorted.forEach(e => {
        const options =
        `<option value='00.00'> 00.00 </option>
        <option value='00.30'> 00.30 </option>
        <option value='01.00'> 01.00 </option>
        <option value='01.30'> 01.30 </option>
        <option value='02.00'> 02.00 </option>
        <option value='02.30'> 02.30 </option>
        <option value='03.00'> 03.00 </option>
        <option value='03.30'> 03.30 </option>
        <option value='04.00'> 04.00 </option>
        <option value='04.30'> 04.30 </option>
        <option value='05.00'> 05.00 </option>
        <option value='05.30'> 05.30 </option>
        <option value='06.00'> 06.00 </option>
        <option value='06.30'> 06.30 </option>
        <option value='07.00'> 07.00 </option>
        <option value='07.30'> 07.30 </option>
        <option value='08.00'> 08.00 </option>
        <option value='08.30'> 08.30 </option>
        <option value='09.00'> 09.00 </option>
        <option value='09.30'> 09.30 </option>
        <option value='10.00'> 10.00 </option>
        <option value='10.30'> 10.30 </option>
        <option value='11.00'> 11.00 </option>
        <option value='11.30'> 11.30 </option>
        <option value='12.00'> 12.00 </option>
        <option value='12.30'> 12.30 </option>
        <option value='13.00'> 13.00 </option>
        <option value='13.30'> 13.30 </option>
        <option value='14.00'> 14.00 </option>
        <option value='14.30'> 14.30 </option>
        <option value='15.00'> 15.00 </option>
        <option value='15.30'> 15.30 </option>
        <option value='16.00'> 16.00 </option>
        <option value='16.30'> 16.30 </option>
        <option value='17.00'> 17.00 </option>
        <option value='17.30'> 17.30 </option>
        <option value='18.00'> 18.00 </option>
        <option value='18.30'> 18.30 </option>
        <option value='19.00'> 19.00 </option>
        <option value='19.30'> 19.30 </option>
        <option value='20.00'> 20.00 </option>
        <option value='20.30'> 20.30 </option>
        <option value='21.00'> 21.00 </option>
        <option value='21.30'> 21.30 </option>
        <option value='22.00'> 22.00 </option>
        <option value='22.30'> 22.30 </option>
        <option value='23.00'> 23.00 </option>
        <option value='23.30'> 23.30 </option>`
        
        const formToInsert = 
        `<div class='date'>
           <form action="/availabilities" accept-charset="UTF-8" method="post">
               <input type="hidden" name="authenticity_token" value="6ig/1cHuHNUg4dxcZ4Ww2K1Mkl7dRHjeZetjLMNum8DOVcj+76buGYgZCLS7hc3OmWOnIrILYdmmOtNzc3m75Q=="/>
               <input type="text" name="availability[date]" value=${e} class='date-input'/>
               <p>from</p>
               <select type="time" name="availability[start_time]" class='time-input'>
                ${options}
               </select>
               <p>to</p>
               <select type="time" name="availability[end_time]" class='time-input'>
                ${options}
               </select>
               <button type="submit">
                   <i class="fas fa-check"></i>
               </button>
                 
           </form>
        </div>`
         document.querySelector('.test').insertAdjacentHTML('beforeend', formToInsert )
    })
}
let datesValidated = []
    if(document.querySelector('.inputDate')) {
        document.querySelector('.inputDate').addEventListener('change', e => {

            let date = e.target.value.split(',').map(e => e.trim()).sort();
            console.log(date)

            if(datesValidated.length == 0){
                console.log('will send form')
                insertFormDate(date)              
            } else {
                datesValidated.forEach(datevalidated => {
                    if(date.includes(datesValidated)){
                    let indexDateValidated = date.indexOf(datevalidated);
                    date.splice(indexDateValidated, 1)
                    insertFormDate(date) 
                    } else {
                        console.log('to delete')
                    }
                })
            }

            if(document.querySelector('.date')){
                document.querySelector('.fa-check').addEventListener('click', e => {
                    const divParent = e.target.closest('div')
                    const formDate = e.target.closest('form')
                    const inputDate = formDate.children[1].value

                    divParent.classList.add('hidden')
                    datesValidated.push(inputDate)
                })
            }  
        })
    }
}