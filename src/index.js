import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import App from './App';
import { Navbar } from './components'
import { About, Contact, Projects } from "./containers"
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
    <Router>
        <div>
            <Navbar />
            <Route exact path="/" component={App} />
            <Route exact path="/projects" component={Projects}/>
            <Route exact path="/contact" component={Contact}/>
            <Route exact path="/about" component={About}/>
        </div>
    </Router>
    ,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
