import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person.js'
import person from "./Person";

class App extends Component {
    state = {
        persons: [
            {name: 'Rohit', age: '28'},
            {name: 'Mohit', age: '25'},
            {name: 'Pankaj', age: '57'}
        ],
        otherstate: "some other value"

    }
    switchNameHandler = () => {
        console.log("herllosdf")
        //console.log('Was Clicked!');
        //Dont do this this.state.persons[0].name='maxmillian';
        this.setState({
            persons: [
                {name: 'Rohit Sinha', age: '29'},
                {name: 'Mohit', age: '25'},
                {name: 'Pankaj', age: '57'}
            ]
        })
    }

    render() {
        return (
            <div className="App">
                <h1>Do U Work At Company</h1>
                <button onClick={this.switchNameHandler}>Switch Name</button>
                <Person
                    name={this.state.persons[0].name}
                    age={this.state.persons[0].age}/>
                <Person
                    name={this.state.persons[1].name}
                    age={this.state.persons[1].age}>My Hobbies:Playing games on
                    mobile phone</Person>
                <Person
                    name={this.state.persons[2].name}
                    age={this.state.persons[2].age}/>
            </div>
        );
        // React.createElement('div',null,React.createElement('h1',{className:'App'},'Do You Work At Company?'));
    }
}

export default App;
