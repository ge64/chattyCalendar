import React from 'react';
import MyCalendar from '../MyCalendar';
import { myEventsList } from '../mockEvents';

const HomePage = () => {
    return (
        <div>
            <h1>Welcome to Chatty Calendar</h1>
            <MyCalendar events={myEventsList} />
        </div>
    );
};

export default HomePage;
