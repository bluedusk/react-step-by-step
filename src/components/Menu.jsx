import React from "react";

export const Menu = ({ onClickHome, onClickAdd }) => (
  <div className="menu">
    <button className="button" onClick={onClickHome}>
      Home
    </button>
    <button className="button" onClick={onClickAdd}>
      Add
    </button>
  </div>
);
