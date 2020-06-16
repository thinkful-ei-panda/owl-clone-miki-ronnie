import React from 'react';

function Chat(props) {
    new Date(props.timestamp)
    return (
        <div>
            <img src={props.avatar} alt={props.name} />
            <p>{props.name}</p>
            <p>{props.message}</p>
            {Message(props.type)}
        </div>

    )
}

// Chat-type based
// Figure out timestamps later
// Figure out how to do message

function Message (props) {
    switch (props) {
        case 'thumbs-up':
            return (
                <p>{props.name} gave a thumbs up!</p>
            );
            break;
        case 'thumbs-down':
            return (
                <p>{props.name} gave a thumbs down!</p>
            );
            break;
        case 'raise-hand':
            return (
                <p>{props.name} raised hand!</p>
            );
            break;
        case 'clap':
            return (
                <p>{props.name} clapped!</p>
            );
            break;
        case 'join':
            return (
                <p>{props.name} joined!</p>
            );
            break;
        case 'leave':
            return (
                <p>{props.name} left!</p>
            );
            break;
        case 'join-stage':
            return (
                <p>{props.name} joined the stage!</p>
            );
            break;
        case 'leave-stage':
            return (
                <p>{props.name} left the stage!</p>
            );
            break;
        default:
            return (
                <p>{props.message}</p>
            )
    }
}

export default Chat;