import React, { Component } from 'react';
import LifecycleB from './LifecycleB';

class LifecycleA extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: 'Beast'
        }

        console.log('LifeCycleA Constructor')
    }

    static getDerivedStateFromProps(props, state) {
        console.log('LifeCycleA getDerivedStateFromProps')
        return null;
    }
    
    componentDidMount() {
        console.log('LifeCycleA componentDidMount')
    }

    shouldComponentUpdate() {
        console.log('LifeCycleA shouldComponentUpdate') 
        return true;
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('LifeCycleA getSnapshotBeforeUpdate')
        return null
    }

    componentDidUpdate() {
        console.log('LifeCycleA componentDidUpdate')
    }

    changeState = () => {
        this.setState({
            name: 'Roman Reigns'
        })
    }

    render() {
        console.log('LifeCycleA Render')
        return (
            <div>
                <h1>Lifecycle A</h1>
                <button onClick={this.changeState}>Change State</button>
                <LifecycleB />
            </div>
        )
    }
}

export default LifecycleA;