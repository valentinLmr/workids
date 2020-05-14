class Availability {
    constructor(){
        this.availabilities = []
    }

    addAvailability(id, date, start_time, end_time) {
        const availability = {
            id,
            date,
            start_time,
            end_time
        }
        this.availabilities.push(availability);
        return availability;
    }
}

const states = {}


let datesCreated = []
states.dates = new Availability()

console.log(arrayDatesCreated)
   arrayDatesCreated.forEach(e => {
       const newdate = new Date(e.date);
       datesCreated.push(e.date)
       availabilities.selectedDates.push(newdate)
       states.dates.addAvailability(e.id, e.date, e.start_time, e.end_time)
       
    })
    console.log(states.dates)

     date.forEeach(element => {
        if(!datesCreated.includes(e)){
            states.dates.addAvailability = new Availability(e.id, e.date, e.start_time, e.end_time)
        }
    })

