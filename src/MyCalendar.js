import React, { Component } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from '@fullcalendar/daygrid';
import './MyCalendar.css';


class MyCalendar extends Component {
    render() {
        return (
          <div className="calendar">
            <FullCalendar
            height={ 800 }
            defaultView="dayGridMonth"
            plugins={[ dayGridPlugin ]}
            events={[
                { title: 'event 1', date: '2024-06-01' },
                { title: 'event 2', date: '2024-06-02' }
            ]}
            />
          </div>
        );
    }
}
export default MyCalendar;