import React, { Component } from "react";
import DataForm from "./Form";

class AddForm extends Component {
  state = {
    person: {
      id: "",
      name: "",
      age: ""
    }
  };

  submit = () => {
    const person = {
      ...this.state.person,
      id: Math.random()
        .toString(16)
        .substr(3)
    };
    this.props.onSubmit(person);
  };

  change = event =>
    this.setState({
      person: {
        ...this.state.person,
        [event.target.id]: event.target.value
      }
    });

  render() {
    return (
      <DataForm
        person={this.state.person}
        onChange={this.change}
        onSubmit={this.submit}
      />
    );
  }
}

export default AddForm;
