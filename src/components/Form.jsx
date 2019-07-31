import React from "react";

const DataForm = ({ person, onChange, onSubmit }) => {
  return (
    <div className="form">
      <div className="row">
        <span>ID:</span>
        <input
          disabled
          type="text"
          id="name"
          value={person.id}
          onChange={onChange}
        />
      </div>
      <div className="row">
        <span>Name:</span>
        <input
          type="text"
          placeholder="name"
          id="name"
          value={person.name}
          onChange={onChange}
        />
      </div>
      <div className="row">
        <span>Age:</span>
        <input
          type="text"
          placeholder="age"
          id="age"
          value={person.age}
          onChange={onChange}
        />
      </div>
      <div>
        <button className="button" onClick={onSubmit}>
          Submit
        </button>
      </div>
    </div>
  );
};

export default DataForm;
