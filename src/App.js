import React, {Component} from 'react';
import classes from './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      {
        id: 'askdh1',
        name: 'Max',
        age: 28
      }, {
        id: 'ash2',
        name: 'Bhaskar',
        age: 27
      }, {
        id: 'aswq3',
        name: 'Chapla',
        age: 26
      }
    ],
    otherState: 'some other value',
    showPersons: false
  }

  nameChangeHandler = (id, event) => {
    const index = this
      .state
      .persons
      .findIndex(p => {
        return p.id === id;
      })

    const person = {
      ...this.state.persons[index]
    };

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[index] = person;

    this.setState({persons: persons});
  }

  deletePersonHandler = (index) => {
    const persons = [...this.state.persons];
    persons.splice(index, 1);
    this.setState({persons: persons});
  }

  togglePersonsHandler = () => {
    this.setState({
      showPersons: !this.state.showPersons
    })
  }

  render() {

    const assignedClasses = [];
    if (this.state.persons.length <= 2) {
      assignedClasses.push(classes.red);
    }
    if (this.state.persons.length <= 1) {
      assignedClasses.push(classes.bold);
    }

    return (
      <div className={classes.App}>
        <h1>Hi, I am a React App</h1>
        <p className={assignedClasses.join(' ')}>This is really working!</p>
        <button className={this.state.showPersons && classes.Red} onClick={this.togglePersonsHandler}>Toggle Persons</button>

        {this.state.showPersons && <div>
          {this
            .state
            .persons
            .map((person, index) => {
              return <Person
                key={person.id}
                click={this
                .deletePersonHandler
                .bind(this, index)}
                changed={this
                .nameChangeHandler
                .bind(this, person.id)}
                name={person.name}
                age={person.age}/>
            })}
        </div>}
      </div>
    );
  }
}

export default App;
