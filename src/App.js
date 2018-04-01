import React, {Component} from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      {
        id:'askdh1',
        name: 'Max',
        age: 28
      }, {
        id:'ash2', 
        name: 'Bhaskar',
        age: 27
      }, {
        id:'aswq3',
        name: 'Chapla',
        age: 26
      }
    ],
    otherState: 'some other value',
    showPersons: false
  }

  nameChangeHandler = (id, event) => {
    const index = this.state.persons.findIndex(p => {
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

  deletePersonHandler = (index) =>{
    // const persons = this.state.persons.slice();
    const persons =[...this.state.persons];
    persons.splice(index,1);
    this.setState({persons : persons});
  }

  togglePersonsHandler = () => {
    this.setState({
      showPersons: !this.state.showPersons
    })
  }

  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    // let persons = null;

    // if (this.state.showPersons) {
    //   persons = (
    //     <div>
    //       <Person name={this.state.persons[0].name} age={this.state.persons[0].age}/>
    //       <Person
    //         name={this.state.persons[1].name}
    //         age={this.state.persons[1].age}
    //         click={this
    //         .switchNameHandler
    //         .bind(this, 'Max!')}
    //         changed={this.nameChangeHandler}>My Hobbies: Racing
    //       </Person>
    //       <Person name={this.state.persons[2].name} age={this.state.persons[2].age}/>
    //     </div>
    //   )
    // }

    return (
      <div className="App">
        <h1>Hi, I am a React App</h1>
        <p>This is really working!</p>
        <button style={style} onClick={this.togglePersonsHandler}>Toggle Persons</button>

        {/* this is js way of displaying.
        Personally, I like the other way. */}

        {/* {persons} */}
        
        {/* this is a react way
        of handling togglePersonsHandler function */}

        {this.state.showPersons && <div>
          {this.state.persons.map((person,index)=>{
            return <Person 
                      key={person.id}
                      click={this.deletePersonHandler.bind(this,index)}
                      changed={this.nameChangeHandler.bind(this,person.id)}
                      name={person.name} 
                      age={person.age}/>
          })}
          {/* <Person name={this.state.persons[0].name} age={this.state.persons[0].age}/>
          <Person
            name={this.state.persons[1].name}
            age={this.state.persons[1].age}
            click={this
            .switchNameHandler
            .bind(this, 'Max!')}
            changed={this.nameChangeHandler}>My Hobbies: Racing
          </Person>
          <Person name={this.state.persons[2].name} age={this.state.persons[2].age}/> */}
        </div>}
      </div>
    );
    // return React.createElement('div',{className: 'App'},
    // React.createElement('h1',null ,'Hi, I am  a React App!!'));
  }
}

export default App;
