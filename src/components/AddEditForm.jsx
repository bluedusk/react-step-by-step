import React, { useState } from "react";
import { DataForm } from "./Form";

export const AddEditForm = ({ person: currentPerson, onSubmit }) => {
  const [person, setPerson] = useState(
    currentPerson || {
      id: undefined,
      name: "",
      age: ""
    }
  );

  const submit = () => onSubmit(person);

  const change = event =>
    setPerson({
      ...person,
      [event.target.id]: event.target.value
    });

  return <DataForm person={person} onChange={change} onSubmit={submit} />;
};
