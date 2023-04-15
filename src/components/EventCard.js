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

function EventCard({ event }) {
    return (
        <div className="main-card">
            <div className="card-header">
                <h1>HelloHello.fr</h1>
                {/* <a class="btn connect" href="/event">Mes événements</a> */}
                <a className="btn connect" href="/login">Se connecter</a> 
            </div>
            <div className="card-content">
                <h2>{event.name}</h2>
                <h3>{formatDate(event.date)}</h3>
                <p>{event.description}</p>
            </div>
            <div className="card-buttons">
                <button className="btn info">{event.attendees.length} / 20 participants</button>
                <button className="btn info">7 femmes et 7 hommes de 18 à 29 ans</button>
                <button className="btn action">Participer</button>
            </div>
        </div>
    );
}

export default EventCard;