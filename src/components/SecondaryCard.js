import React from 'react';

function formatDate(date) {
    return new Intl.DateTimeFormat('fr-FR', {
        year: 'numeric',
        month: 'long',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
    }).format(new Date(date));
}

function SecondaryCard({ event }) {
    return (
        <div className="secondary-card">
            <div className="secondary-card-content">
                <h2>{event.name}</h2>
                <p>{formatDate(event.date)}</p>
            </div>
            <div className="card-buttons">
                <button className="btn info">{event.attendees.length} / 20 participants</button>
                <button className="btn action">Participer</button>
            </div>
        </div>
    );
}

export default SecondaryCard;