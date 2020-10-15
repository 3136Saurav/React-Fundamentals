import React from 'react';

const heading = {
    fontSize: '72px',
    color: 'blue', 
    textShadow: '10px 10px #ffeeff'
}

function Inline() {
    return(
        <div>
            <h1 style={heading}>Inline</h1>
        </div>
    )
} 

export default Inline;