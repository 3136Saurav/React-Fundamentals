import React from 'react';
import Person from './Person';

function NameList() {
    const names = ['Bruce', 'Clark', 'Diana']
    const nameList = names.map((name, index) => <h2 key={index}>{index}: {name}</h2>)

    const persons = [
        {
            id: 1,
            name: 'Clark',
            age: 24,
            skill: 'Angular'
        },
        {
            id: 2,
            name: 'Diana',
            age: 27,
            skill: 'React'
        },
        {
            id: 3,
            name: 'Bruce',
            age: 28,
            skill: 'Vue'
        }
    ]
    return (<div>
        {nameList}
        </div>)
    // const personList = persons.map(person => )
    const personList = persons.map(person => <Person key={person.id} person={person} />)
    // return <div>{personList} </div>
    
}

export default NameList;