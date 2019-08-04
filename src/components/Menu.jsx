import React from "react";
import { Link } from "react-router-dom";
export const Menu = ({ onClickAdd }) => (
  <div className="menu">
    <Link className="button" to="/" onClick={onClickAdd}>
      Home
    </Link>
    <Link className="button" to="/add">
      Add
    </Link>
    <Link className="button" to="/about">
      About
    </Link>
    <Link className="button" to="/contact">
      Contact
    </Link>
    <Link className="button" to="/admin">
      Admin
    </Link>
  </div>
);
