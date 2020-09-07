import React, { Component } from 'react';

class HomePage extends Component{
    render(){
        return(
            <div>
                <h1>{this.props.hike.name}</h1>
                <h3>{this.props.hike.location}</h3>
                <p>{this.props.hike.summary}</p>
                <h3>{this.props.hike.stars}</h3>
            </div>
        )
    }
}

export default HomePage;