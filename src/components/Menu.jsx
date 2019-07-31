import React from "react";

const Menu = ({ onBtnClick }) => (
  <div className="menu">
    <button className="button" onClick={() => onBtnClick("home")}>
      Home
    </button>
    <button className="button" onClick={() => onBtnClick("add")}>
      Add
    </button>
  </div>
);

export default Menu;
