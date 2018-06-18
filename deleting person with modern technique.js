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
        showPersons: false

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
    deletePersonHandler = (personIndex) => {
        // const persons = this.state.persons.slice();
        const persons=[...this.state.persons];
        persons.splice(personIndex, 1);
        this.setState({persons: persons});
    }
    togglePersonHandler = () => {
        const doesShow = this.state.showPersons;
        this.setState({showPersons: !doesShow});
    }

    render() {
        const style =
            {
                backgroundColor: 'white',
                font: 'inherit',
                border: '1px solid blue',
                padding: '8px',
                cursor: 'pointer'
            };
        let persons = null;
        if (this.state.showPersons) {
            persons = (
                <div>
                    {this.state.persons.map((person, index) => {
                        return <Person click={() => this.deletePersonHandler(index)} name={person.name}
                                       age={person.age}/>
                    })}

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
