import React, { PureComponent, Component } from 'react';
import PureComp from './PureComp';
import RegComp from './RegComp';
import MemoComp from './MemoComp';

class ParentComp extends PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            name: 'Dean Ambrose'
        }
    }

    componentDidMount() {
        setInterval(() => {
            this.setState({
                name: 'Dean Ambrose'
            })
        }, 2000)
    }

    render() {
        console.log('******** Parent Component Render *********')
        return(
            <div>
                <h1>Parent Component</h1>
                <MemoComp name={this.state.name} />
                {/* <RegComp name={this.state.name} /> */}
                {/* <PureComp name={this.state.name} /> */}
            </div>
        )
    }
}

export default ParentComp;