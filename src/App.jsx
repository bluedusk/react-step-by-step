import React, { Component } from "react";
import Menu from "./components/Menu";
import DataTable from "./components/Table";
import AddForm from "./components/AddForm";
import EditForm from "./components/EditForm";
import MockData from "./mock/mockService";

import "./App.css";

class App extends Component {
  // app inital state
  state = {
    data: [],
    // route without router
    menu: "home",
    currentPerson: null
  };

  // side effect
  componentDidMount() {
    this.setState({ data: MockData });
  }

  go = menu => this.setState({ menu });

  del = person =>
    this.setState({
      data: this.state.data.filter(item => item.id !== person.id)
    });

  edit = person => {
    this.setState({ currentPerson: person }, () => {
      this.go("edit");
    });
  };

  addOrEdit = person => {
    const newData = [...this.state.data];
    const index = newData.findIndex(item => {
      return item.id === person.id;
    });

    if (index === -1) {
      newData.push(person);
    } else {
      newData[index] = person;
    }
    this.setState({ data: newData, menu: "home" });
  };

  addPerson = person =>
    this.setState({ data: [...this.state.data, person], menu: "home" });

  editPerson = person =>
    this.setState({
      data: this.state.data.map(item => {
        if (item.id === person.id) {
          return person;
        }
        return item;
      }),
      menu: "home"
    });

  // We could combine these two component to one, but that will be less readable.
  // So just keep it as two.
  renderForm = menu => {
    if (menu === "add") {
      return <AddForm onSubmit={this.addOrEdit} />;
    }
    if (menu === "edit") {
      return (
        <EditForm data={this.state.currentPerson} onSubmit={this.editPerson} />
      );
    }
  };

  render() {
    return (
      <div className="App">
        <Menu onBtnClick={this.go} />
        {this.state.menu === "home" ? (
          <DataTable
            data={this.state.data}
            onDel={this.del}
            onEdit={this.edit}
          />
        ) : (
          this.renderForm(this.state.menu)
        )}
      </div>
    );
  }
}

export default App;
