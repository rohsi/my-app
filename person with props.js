import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person.js'
import person2 from "./Person2";

class Appst extends Component {

    render()
    {
        return(
            <person className="App">
               <h1>Do u like leaving in this country</h1>
                <person name="'rohit" age="'25"/>
                <person name="'rohit" age="'25">my hobbies:dancing</person>
                <person name="'rohit" age="'25"/>
        );
      //
    }
}

export default Appst;