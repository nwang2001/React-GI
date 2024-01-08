// MEDIUM: Replace all of the hard-coded with data from ‘this.state.person’ in the constructor.  Then take the returned ‘div’ and create a component, pass state into it and import it as ‘BasicInfo’. (This challenge should not change the look of the page)

import React, { Component } from 'react'

 class BasicInfo extends Component {
  constructor(props) {
    super();
    this.state = {
        person: {

          name: props.name,
          age: props.age,
          number: props.number,
          state: props.state, 
          city: props.city,
          dob: props.dob,
        }        

     };
 }

 render() {
  return (
    <div className="person">

      <p>{this.state.person.name}</p>
      <p>{this.state.person.age}</p>
      <p>{this.state.person.number}</p>
      <p>{this.state.person.state}</p>
      <p>{this.state.person.city}</p>
      <p>{this.state.person.dob}</p>
    </div>
      );
    }
}

export default BasicInfo;