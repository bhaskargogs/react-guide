import React from "react";
import classes from "./Cockpit.css";

const cockpit = (props) => {
  const assignedClasses = [];
  if (props.persons.length <= 2) {
    assignedClasses.push(classes.red);
  }
  if (props.persons.length <= 1) {
    assignedClasses.push(classes.bold);
  }
  return (
    <div className={classes.Cockpit}>
      <h1> Hi, I am a React App </h1>
      <p className={assignedClasses.join(" ")}> This is really working! </p>
      <button
        className={props.showPersons ? classes.Red : ""}
        onClick={props.toggled}
      >
        Toggle Persons
      </button>
    </div>
  );
};
export default cockpit;
