import React from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';

const localizer = momentLocalizer(moment);

const MyCalendar = ({ events }) => {
    const eventPropGetter = (event, start, end, isSelected) => {
        let newStyle = {
            backgroundColor: "lightblue", // Default color
            color: 'white',
            borderRadius: "0px",
            border: "none"
        };

        if (event.title === 'Big Meeting') {
            newStyle.backgroundColor = "blue";
        } else if (event.title === 'Vacation') {
            newStyle.backgroundColor = "yellow";
        }

        return {
            className: "",
            style: newStyle
        };
    };

    return (
        <div>
            <Calendar
                localizer={localizer}
                events={events}
                startAccessor="start"
                endAccessor="end"
                style={{ height: 500 }}
                eventPropGetter={eventPropGetter}
            />
        </div>
    );
};

export default MyCalendar;
