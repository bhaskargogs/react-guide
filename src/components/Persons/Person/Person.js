import React, { Component } from "react";

import classes from "./Person.css";

class Person extends Component {
  constructor(props){
    super(props);
    console.log('inside [Person.js] constructor()', props);
  }
  componentWillMount(){
    console.log('inside [Person.js] componentWillMount()');
  }
  componentDidMount(){
    console.log('inside [Person.js] componentDidMount()');
  }
  render() {
    console.log('inside [Person.js] render()');
    return (
      <div className={classes.Person}>
        <p onClick={this.props.click}>
          I'm {this.props.name} and I am {this.props.age} years old
        </p>
        <p>{this.props.children}</p>
        <input type="text" onChange={this.props.changed} value={this.props.name} />
      </div>
    );
  }
}

export default Person;
