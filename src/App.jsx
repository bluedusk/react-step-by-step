import React, { useState, useEffect } from "react";
import { Menu } from "./components/Menu";
import { DataTable } from "./components/Table";
import { AddEditForm } from "./components/AddEditForm";
import MockData from "./mock/mockService";

import "./App.css";

export const App = () => {
  const [data, setData] = useState([]);
  const [menu, setMenu] = useState("home");
  const [currentPerson, setCurrentPerson] = useState(null);

  // side effect
  useEffect(() => {
    setData(MockData);
  }, []);

  const go = menu => setMenu(menu);

  const del = person => setData(data.filter(item => item.id !== person.id));

  const edit = person => {
    setCurrentPerson(person);
    go("edit");
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
    setMenu("home");
  };

  return (
    <div className="App">
      <Menu
        onClickHome={() => go("home")}
        onClickAdd={() => {
          setCurrentPerson(null);
          go("add");
        }}
      />
      {menu === "home" ? (
        <DataTable data={data} onDel={del} onEdit={edit} />
      ) : (
        <AddEditForm person={currentPerson} onSubmit={addEditPerson} />
      )}
    </div>
  );
};
