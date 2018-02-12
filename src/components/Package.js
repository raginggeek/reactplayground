import React from 'react';
import '../App.css';

const Package = (props) => {
    return (
        <div>
            <h3>{props.data.packagename}</h3>
            <p>
                Current version is {props.data.previousversion}
            </p>
            <h3>Size</h3>
            <p>The package is {props.data.size} in size.</p>

        </div>
    );
};

export default Package;