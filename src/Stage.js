import React from 'react';

function Stage(props) {
    return (
        <div>
            <img src={props.avatar} alt={props.name} />
            <p>{props.name}</p>
        </div>
    )
}

export default Stage;