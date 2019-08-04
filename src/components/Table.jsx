import React from "react";
import { Route, Link } from "react-router-dom";

const Detail = ({ match }) => {
  return <h2>Nested Route: {match.params.id}</h2>;
};

export const DataTable = ({ data, onDel, onEdit }) => (
  <>
    <div className="content">
      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Age</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.map(item => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>
                <Link to={`/person/${item.id}`}>{item.name}</Link>
              </td>
              <td>{item.age}</td>
              <td>
                <button className="button" onClick={() => onDel(item)}>
                  Del
                </button>
                <button className="button" onClick={() => onEdit(item)}>
                  Edit
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    {/* NOTE: nested route */}
    <Route path="/person/:id" component={Detail} />
  </>
);
