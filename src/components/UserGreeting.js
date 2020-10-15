import React, { Component } from 'react';

class UserGreeting extends Component {
    constructor(props) {
        super(props)

        this.state = {
            isLoggedIn: false
        }
    }

    render() {
        return this.state.isLoggedIn ? <h1>Welcome Saurav</h1> : <h1>Welcome Guest</h1> 

        // if (this.state.isLoggedIn) {
        //     return <h1>Welcome Saurav</h1>
        // } else {
        //     return <h1>Welcome Guest</h1>
        // }
    }
}

export default UserGreeting;