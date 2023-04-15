import React, { useState, useEffect } from 'react';
import api from '../api';
import EventCard from '../components/EventCard';
import SecondaryCard from '../components/SecondaryCard';

function HomePage() {
    const [events, setEvents] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await api.get('/events');
                const sortedEvents = response.data.sort((a, b) => new Date(a.date) - new Date(b.date));
                setEvents(sortedEvents);
            } catch (error) {
                console.error(error);
            }
        };

        fetchData();
    }, []);

    const mainEvent = events[0];
    const otherEvents = events.slice(1);

    return (
        <div className="container">
            {mainEvent && <EventCard event={mainEvent} />}
            <div className="cards">
                {otherEvents.map((event) => (
                    <SecondaryCard key={event.id} event={event} />
                ))}
            </div>
        </div>
    );
}

export default HomePage;