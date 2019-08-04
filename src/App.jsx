import React, { useState, useEffect } from "react";
import { Menu } from "./components/Menu";
import { DataTable } from "./components/Table";
import { AddEditForm } from "./components/AddEditForm";
import MockData from "./mock/mockService";
import { Route, Switch, withRouter } from "react-router-dom";
import { NoMatch } from "./404";
import "./App.css";

export const About = () => <h4>About</h4>;
export const Contact = () => <h4>Contact</h4>;

export const App = withRouter(({ history }) => {
  const [data, setData] = useState([]);
  const [currentPerson, setCurrentPerson] = useState(null);

  console.log(history);
  // side effect
  useEffect(() => {
    setData(MockData);
  }, []);

  const del = person => setData(data.filter(item => item.id !== person.id));

  const edit = person => {
    setCurrentPerson(person);
    history.push("/edit");
  };

  const addEditPerson = person => {
    if (!person.id) {
      setData([
        ...data,
        {
          ...person,
          id: Math.random()
            .toString(16)
            .substr(3)
        }
      ]);
    } else {
      setData(
        data.map(item => {
          if (item.id === person.id) {
            return person;
          }
          return item;
        })
      );
    }
    history.push("/");
  };

  return (
    <div className="App">
      <Menu
        onClickAdd={() => {
          setCurrentPerson(null);
        }}
      />
      <Switch>
        <Route
          exact
          path="/"
          render={() => <DataTable data={data} onDel={del} onEdit={edit} />}
        />
        <Route
          path="/person"
          render={() => <DataTable data={data} onDel={del} onEdit={edit} />}
        />
        <Route
          exact
          path="/add"
          render={() => <AddEditForm onSubmit={addEditPerson} />}
        />
        <Route
          exact
          path="/edit"
          render={() => (
            <AddEditForm person={currentPerson} onSubmit={addEditPerson} />
          )}
        />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        {/* when none of the above match, <NoMatch> will be rendered */}
        <Route component={NoMatch} />
      </Switch>
    </div>
  );
});
