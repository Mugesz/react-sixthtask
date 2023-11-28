import React from 'react';
import { Link } from 'react-router-dom';

const Table = ({ data, handleDelete }) => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="table-responsive">
          <table className="table table-bordered table-hover table-striped" id="dataTable" cellSpacing={0}>
            <thead className="text-center">
              <tr>
                <th>Name</th>
                <th>User name</th>
                <th>Email</th>
                <th>Actions</th>
              </tr>
            </thead>

            <tbody className="text-center">
              {Array.isArray(data.users) &&
                data.users.map((employee) => {
                  return (
                    <tr key={employee.id}>
                      <td>{employee.name}</td>
                      <td>{employee.username}</td>
                      <td>{employee.email}</td>
                      <td className="text-center">
                        <Link to={`/view-user/${employee.id}`} className="btn btn-sm btn-info">
                          <i className="fa-solid fa-eye p-2"></i>
                          View More Details
                        </Link>
                        <Link to={`/edit-user/${employee.id}`} className="btn btn-sm btn-warning ml-2">
                          <i className="fa-solid fa-pen-to-square p-2"></i>
                          Edit User
                        </Link>
                        <button
                          onClick={() => handleDelete(employee.id, employee.name)}
                          className="btn btn-sm btn-danger ml-2"
                        >
                          <i className="fa-solid fa-trash p-2"></i>
                          Delete User
                        </button>
                       
                      </td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Table;
