import React from 'react';
import '../App.css';

const Profile = (props) => {
    return (
        <div>
            <h3>{props.data.name}</h3>
            <p>
                {props.data.name} is {props.data.age} and {props.data.bio}
            </p>
            <h3>Hobbies</h3>
            <ul>
                {props.data.hobbies.map(hobby => {return (<li>{hobby}</li>) })}
            </ul>
        </div>
    );
};

export default Profile;