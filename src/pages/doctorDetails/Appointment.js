import React from "react";
import DatePicker from "react-horizontal-datepicker";
function Calendar() {

    const selectedDay = (val) =>{
        console.log(val)
    };
    return (
        <div  className="datepicker">
                  <DatePicker getSelectedDay={selectedDay}
                  endDate={100}
                  labelFormat={"yyyy"}
                  color={"#374e8c"}  
                 locale= 'fr-Ca'   
                 disabledDays={[ { daysOfWeek: [0, 6] }]}  
/>
        </div>

    )
}

export default Calendar
