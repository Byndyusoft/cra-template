import React from 'react';
import ReactDOM from 'react-dom';
import { App, setupErrorHandling } from './App';
import reportWebVitals from './reportWebVitals';
import './Shared/styles/index.css';

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById('root')
);

setupErrorHandling();
reportWebVitals(console.log);
