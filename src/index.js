import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import list from './list';
import chatEvents from './chatEvents';

ReactDOM.render(<App chatEvents={chatEvents} list={list}/>, document.getElementById('root'));