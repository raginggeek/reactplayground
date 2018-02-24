import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import logo from '../logo.svg';
import '../App.css';
import PackageDetails from "./PackageDetails";
import Profiles from "./Profiles";
import App from './App.js';
import {Route} from 'react-router-dom';

export default class Header extends Component {
    constructor(props){
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h1 className="App-title">Welcome to React</h1>
                </header>
                <Link to='/Packages'>PackageDetails</Link>
                <Link to='/Profiles'>Profiles</Link>
                <Route exact path='/' component={App} />
                <Route path='/profiles' component={Profiles} />
                <Route path='/packages' component={PackageDetails} />
            </div>
        );
    }
}
