import React from "react";
import classes from "./Cockpit.css";
import Aux from '../../hoc/Aux';

const cockpit = (props) => {
  const assignedClasses = [];
  if (props.persons.length <= 2) {
    assignedClasses.push(classes.red);
  }
  if (props.persons.length <= 1) {
    assignedClasses.push(classes.bold);
  }
  return (
    <Aux>
      <h1> Hi, I am a React App </h1>
      <p className={assignedClasses.join(' ')}> This is really working! </p>
      <button
        className={props.showPersons ? [classes.Button, classes.Red].join(' ') : classes.Button}
        onClick={props.toggled}
      >
        Toggle Persons
      </button>
    </Aux>
  );
};
export default cockpit;
