import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person.js'


class App extends Component {
    state = {
        persons: [
            {name: 'Rohit', age: '28'},
            {name: 'Mohit', age: '25'},
            {name: 'Pankaj', age: '57'}
        ],
        otherstate: "some other value",
        showPersons:false

    }
    switchNameHandler = (newName) => {

        //console.log('Was Clicked!');
        //Dont do this this.state.persons[0].name='maxmillian';
        this.setState({
            persons: [
                {name: newName, age: '29'},
                {name: 'Mohit', age: '25'},
                {name: 'Pankaj', age: '57'}
            ]
        })
    }
    nameChangedHandler = (event) => {
        this.setState({
            persons: [
                {name: 'Rohit', age: '29'},
                {name: event.target.value, age: '25'},
                {name: 'Pankaj', age: '57'}
            ]
        })
    }
    togglePersonHandler =()=>{
        const doesShow=this.state.showPersons;
        this.setState({showPersons:!doesShow});
    }

    render() {
        const style=
            {
                backgroundColor: 'white',
                font: 'inherit',
                border: '1px solid blue',
                padding: '8px',
                cursor:'pointer'
            };
        let persons=null;
        if (this.state.showPersons) {
            persons =(
                <div>
                    <Person name={this.state.persons[0].name} age={this.state.persons[0].age}/>
                    <Person name={this.state.persons[1].name} age={this.state.persons[1].age}
                            click={this.switchNameHandler.bind(this, 'Rohit ')}
                            changed={this.nameChangedHandler}>My Hobbies:Playing games on
                        mobile phone</Person>
                    <Person name={this.state.persons[2].name} age={this.state.persons[2].age}/>
                </div>

            );

        }
        return (
            <div className="App">
                <h1>Do U Work At Company</h1>
                <button
                    style={style}
                    onClick={this.togglePersonHandler}>Toggle Persons
                </button>

                {persons}

            </div>
        );
        // React.createElement('div',null,React.createElement('h1',{className:'App'},'Do You Work At Company?'));
    }
}

export default App;
