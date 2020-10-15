import React from 'react';
import './myStyles.css';

function Stylesheet(props) {
    let primary = props.primary ? 'primary' : '';
    return (
        <div>
            <h1 className={`${primary} font-xl`}>StyleSheet</h1>
        </div>
    )
}

export default Stylesheet;