import React, { Component } from "react";

import Person from "./Person/Person";

class Persons extends Component {
  constructor(props) {
    super(props);
    console.log("inside [Persons.js] constructor()", props);
  }
  componentWillMount() {
    console.log('inside [Persons.js] componentWillMount()');
  }
  componentDidMount() {
    console.log('inside [Persons.js] componentDidMount()');
  }
  componentWillReceiveProps(nextProps) {
    console.log('[UPDATE Persons.js] inside componentWillReceiveProps', nextProps);
  }
  shouldComponentUpdate(nextProps, nextState) {
    console.log('[UPDATE Persons.js] inside shouldComponentUpdate', nextProps, nextState);
    return nextProps.persons !== this.props.persons
          || nextProps.changed !== this.props.changed 
          || nextProps.clicked !== this.props.clicked;
  }
  componentWillUpdate(nextProps, nextState) {
    console.log('[UPDATE Persons.js] inside componentWillUpdate', nextProps, nextState);
  }
  componentDidUpdate(){
    console.log('[UPDATE Persons.js] inside componentDidUpdate');
  }
  render() {
    console.log("inside [Persons.js] render()");
    return this.props.persons.map((person, index) => {
      return (
        <Person
          key={person.id}
          click={this.props.clicked.bind(this, index)}
          changed={this.props.changed.bind(this, person.id)}
          name={person.name}
          age={person.age}
        />
      );
    });
  }
}

export default Persons;
