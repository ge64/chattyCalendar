import React from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';

const localizer = momentLocalizer(moment);

const MyCalendar = ({ events }) => {
    const eventPropGetter = (event, start, end, isSelected) => {
        let newStyle = {
            color: 'white',
            borderRadius: "0px",
            border: "none"
        };

        // Change color based on the event's approval status
        if (event.isApproved) {
            newStyle.backgroundColor = "#006600"; // Color for approved events
        } else {
            newStyle.backgroundColor = "#efc310"; // Color for unapproved events
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
