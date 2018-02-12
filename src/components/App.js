import React, { Component } from 'react';
import logo from '../logo.svg';
import Profile from './Profile';
import Package from './Package';
import AddProfile from './AddProfile';
import { getProfiles } from '../utils/genworldPackages';
import '../App.css';

export default class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            profiles: [],
            packages: []
        };
        this.addUser = this.addUser.bind(this);
    }

    componentDidMount(){
        getProfiles().then(data => {
            this.setState({
                packages: data
            })
        });
    }

    addUser(newProfile) {
        this.setState({
            profiles: this.state.profiles.concat([newProfile])
        });
    }

    render() {
        let profiles = this.state.profiles.map(profile => {
            return <Profile data={profile} />
        });
        let packages = this.state.packages.map(genpackage => {
            return <Package data={genpackage} />
        });
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h1 className="App-title">Welcome to React</h1>
                </header>
                <p className="App-intro">
                    To get started, edit <code>src/App.js</code> and save to reload!
                </p>
                {profiles}
                <AddProfile addUser = {this.addUser} />
                {packages}
            </div>
        );
    }
}
