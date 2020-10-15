import React, { Component } from 'react';

class Welcome extends Component {
    render() {
        return <h1>Wohoo! I am {this.props.heroName}!</h1>
    }
}

export default Welcome;