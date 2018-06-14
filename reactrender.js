import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person.js'
import person from "./Person";

class Reactrender extends Component {

    render() {
       // return (
         //   <div className="Reactrender">
           //     <h1>atom bomb</h1>
            //</div>
       // );
return React.createElement('div',{className:Reactrender},React.createElement('h3',null,'hello how are you'));
    }
}

export default Reactrender;
