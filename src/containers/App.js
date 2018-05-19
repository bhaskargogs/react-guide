import React, { Component } from "react";
import classes from "./App.css";
import Persons from "../components/Persons/Persons";
import Cockpit from "../components/Cockpit/Cockpit";

class App extends Component {
  state = {
    persons: [
      {
        id: "askdh1",
        name: "Max",
        age: 28
      },
      {
        id: "ash2",
        name: "Bhaskar",
        age: 27
      },
      {
        id: "aswq3",
        name: "Chapla",
        age: 26
      }
    ],
    otherState: "some other value",
    showPersons: false
  };

  nameChangeHandler = (id, event) => {
    const index = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[index]
    };

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[index] = person;

    this.setState({
      persons: persons
    });
  };

  deletePersonHandler = index => {
    const persons = [...this.state.persons];
    persons.splice(index, 1);
    this.setState({
      persons: persons
    });
  };

  togglePersonsHandler = () => {
    this.setState({
      showPersons: !this.state.showPersons
    });
  };

  shouldComponentUpdate(nextProps, nextState) {
    console.log('[UPDATE App.js] inside shouldComponentUpdate', nextProps, nextState);
    return nextState.persons !== this.state.persons || 
          nextState.showPersons !== this.state.showPersons;
  }
  componentWillUpdate(nextProps, nextState) {
    console.log('[UPDATE App.js] inside componentWillUpdate', nextProps, nextState);
  }
  componentDidUpdate(){
    console.log('[UPDATE App.js] inside componentDidUpdate');
  }

  render() {
    return (
      <div className={classes.App}>
      <button onClick={ () => { this.setState({showPersons: true})}}>Show Persons</button>
        <Cockpit
          showPersons={this.state.showPersons}
          persons={this.state.persons}
          toggled={this.togglePersonsHandler}
        />
        {this.state.showPersons && (
          <div>
            <Persons
              persons={this.state.persons}
              clicked={this.deletePersonHandler}
              changed={this.nameChangeHandler}
            />
          </div>
        )}
      </div>
    );
  }
}

export default App;
