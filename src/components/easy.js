// EASY: Create a ‘constructor’ that takes in ‘props’ , call the ‘super()’ method, and set ‘this.state’ to an empty object inside of the ‘App’ class. Inside of ‘this.state’ create a ‘person’ property and set it to an empty object

import React, { Component } from 'react'

export default class easy extends Component {
constructor(props) {
    this.state = {
        person: {}
    };

};

  render() {
    return (
      <div>
        <p></p>
      </div>
    )
  };
}