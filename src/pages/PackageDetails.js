import React, { Component } from 'react';
import Package from '../components/Package';
import { getPackages } from '../utils/genworldPackages';
import '../App.css';

export default class PackageDetails extends Component {
    constructor(props){
        super(props);
        this.state = {
            packages: []
        };
    }

    componentWillMount(){
        console.log('in will mount');
    }

    componentDidMount(){
        console.log('in did mount');
        getPackages().then(data => {
            this.setState({
                packages: data
            })
        });
    }

    render() {
        let packages = this.state.packages.map((genpackage, index) => {
            return <Package key={index} data={genpackage} />
        });
        return (
            <div className="PackageDetails">
                {packages}
            </div>
        );
    }
}
