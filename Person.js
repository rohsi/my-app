import React from 'react';
const person = (props) =>{
    return <div onClick={props.click}>
        <h3>I'm {props.name} and currently I am {props.age} years old</h3>
        <p >{props.children}</p>
    </div>
}
export default person;