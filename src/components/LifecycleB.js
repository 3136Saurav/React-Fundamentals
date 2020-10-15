import React, { Component } from 'react';

class LifecycleB extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: "Brock Lesnar"
        }

        console.log('LifeCycleB Constructor')
    }

    static getDerivedStateFromProps(props, state) {
        console.log('LifeCycleB getDerivedStateFromProps')
        return null;
    }

    componentDidMount() {
        console.log('LifeCycleB componentDidMount')
    }

    shouldComponentUpdate() {
        console.log('LifeCycleB shouldComponentUpdate') 
        return true;
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('LifeCycleB getSnapshotBeforeUpdate')
        return null
    }

    componentDidUpdate() {
        console.log('LifeCycleB componentDidUpdate')
    }

    render() {
        console.log('LifeCycleB Render')
        return(
            <h1>LifeCycle B</h1>
        )
    }
}

export default LifecycleB;