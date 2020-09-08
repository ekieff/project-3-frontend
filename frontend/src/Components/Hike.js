import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class Hike extends Component{
    render(){
        return(
            <div>
                <h1>{this.props.name}</h1>
                <h3>{this.props.location}</h3>
                <p>{this.props.summary}</p>
                <h3>{this.props.stars}</h3>
                <h3> Add to Favorites</h3>
            </div>
        )
    }
}

export default Hike;