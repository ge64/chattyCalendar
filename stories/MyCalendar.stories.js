import React from 'react';
import MyCalendar from '../chatty-calendar/src/MyCalendar';

// import { demoEvents } from '../chatty-calendar/src/exampleEvent';
import demoEvents from '../chatty-calendar/src/exampleEvent.json';

export default {
    title: 'MyCalendar',
    component: MyCalendar,
};

export const Default = () => <MyCalendar events={demoEvents} />;
