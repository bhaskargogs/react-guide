import React, { Component } from "react";

import Person from "./Person/Person";

class Persons extends Component {
  render() {
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
