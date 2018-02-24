import React from 'react';
import ReactDOM from 'react-dom';
import {Route, BrowserRouter as Router} from 'react-router-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import Header from './pages/Header'

ReactDOM.render((
    <Router>
        <Route path='/' component={Header} />
    </Router>
), document.getElementById('root'));
registerServiceWorker();
