import React, { Component } from 'react';
import Profile from '../components/Profile';
import AddProfile from '../components/AddProfile';
import '../App.css';

export default class Profiles extends Component {
    constructor(props){
        super(props);
        this.state = {
            profiles: []
        };
        this.addUser = this.addUser.bind(this);
    }

    componentWillMount(){
        console.log('in will mount');
    }

    componentDidMount(){
        console.log('in did mount');
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
        return (
            <div className="App">
                {profiles}
                <AddProfile addUser = {this.addUser} />
            </div>
        );
    }
}
