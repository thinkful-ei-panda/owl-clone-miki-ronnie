import React from 'react';

function Participant(props) {
    return (
        <div>
            <img src={props.avatar} alt={props.name}/>
            <h2>{props.name}</h2>
            {Status(props)}
        </div>
    );
};


// Put in another file? Call like JSX or function?
function Status (props) {
    if (props.inSession && props.onStage) {
        return (
            <p>On Stage</p>
        )
    } else if (props.inSession) {
        return (
            <p>In Session</p>
        )
    };
};


export default Participant;