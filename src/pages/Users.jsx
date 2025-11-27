import React, { useState } from 'react';
import './Users.css';

const Users = () => {
  const [users] = useState([
    { id: 1, name: 'John', email: 'john@gmail.com', phone: '111111111', role: 'Accountant' },
    { id: 2, name: 'samm', email: 'samm@gmail.com', phone: '675645678', role: 'Manager' },
    { id: 3, name: 'martin', email: 'martin@gmail.com', phone: '444444444', role: 'Developer'},
    { id: 4, name: 'charles', email: 'charles@gmail.com', phone: '893789376', role: 'Manager' },
    { id: 5, name: 'witson', email: 'witson@gmail.com', phone: '999900000', role: 'QA',  },
  ]);

  return (
    <div className="users-container">
      <h2>Users Details</h2>
      <table className="users-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Role</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.phone}</td>
              <td>{user.role}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Users;