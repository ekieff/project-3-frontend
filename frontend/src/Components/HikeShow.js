import React, { Component } from 'react';

class HikeShow extends Component{
    render(){
        return(
            <div>
                <h1>{this.props.name}</h1>
                <h3>{this.props.location}</h3>
                <p>{this.props.summary}</p>
                <h3>{this.props.stars}</h3>
            </div>
        )
    }
}

export default HikeShow;