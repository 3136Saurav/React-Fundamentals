import React, { Component } from 'react';

class EventBind extends Component {
    constructor(props) {
        super(props);

        this.state = {
            message: 'Hello'
        }
    }

    // clickHandler() {
    //     this.setState({
    //         message: "You just Clicked me!"
    //     })
    //     console.log(this);
    // }

    clickHandler = () => {
        this.setState({
            message: "You just Clicked me!"
        })
    }

    render() {
        return (
            <div>
                <h1>{this.state.message}</h1>
                {/* <button onClick={this.clickHandler.bind(this)}>Click</button> */}
                <button onClick={() => this.clickHandler()}>Click</button>
            </div>
        )
    }
}

export default EventBind;