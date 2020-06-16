import React from 'react';
import Chat from './Chat'
import Participant from './Participant';
import Stage from './Stage';
import './App.css';

function App(props) {

  const onStage = props.list.filter(participant => participant.onStage);
  console.log(onStage);

  props.chatEvents.forEach(chat => {
    props.list.forEach((participant => {
      if (chat.participantId === participant.id) {
        chat.name = participant.name;
        chat.avatar = participant.avatar;
      }
    }))
  })

  console.log(props.chatEvents);

  return (
    <main className='App wrapper'>
      <div className="group">
        <div className="side-bar">
          <h2>Chat</h2>
          {props.chatEvents.map((chat, i) => {
            return <Chat key={i} name={chat.name} avatar={chat.avatar} type={chat.type} message={chat.message} time={chat.time} timestamp={chat.timestamp}/>
          })}
        </div>
        <div className="side-bar">
          <h2>Participants</h2>
          {props.list.map(participant => {
            return <Participant key={participant.id} name={participant.name} avatar={participant.avatar} inSession={participant.inSession} onStage={participant.onStage} />
          })}
        </div>
        <div className="stage">
          <h2>Stage</h2>
          {onStage.map((participant, i) => {
            return <Stage key={i} avatar={participant.avatar} name={participant.name} />
          })}
        </div>
      </div>
    </main>
  );
}

export default App;