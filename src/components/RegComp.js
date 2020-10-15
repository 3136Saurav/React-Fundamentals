import React, { Component } from 'react';

class RegComp extends Component {
    
    render() {
        console.log('Regular Component Render')
        return (
            <h1>Regular Component {this.props.name}</h1>
        )
    }
}

export default RegComp;