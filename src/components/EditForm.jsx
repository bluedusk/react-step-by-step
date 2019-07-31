import React, { Component } from "react";
import DataForm from "./Form";

class EditForm extends Component {
  state = {
    // only derive data on first entry
    person: this.props.data
  };

  submit = () => {
    this.props.onSubmit(this.state.person);
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

export default EditForm;
