import React from 'react';

function Person({person}) {
    return(
        <div>
            <h2>I am {person.name}, {person.age} years old, with superpower {person.skill}</h2>
        </div>
    )
}

export default Person