import * as React from 'react';

import { User } from '../api/User.type';

import './Users.scss';

const User: React.FunctionComponent<{ user: User }> = ({
  user,
}) => (
  <tr className="users__row">
    <td className="users__cell">{user.name}</td>
    <td className="users__cell">{user.lastName}</td>
    <td className="users__cell">{user.phone}</td>
  </tr>
);

const Users: React.FunctionComponent<{ users: User[] }> = ({
  users,
}) => (
  <table className="users" cellSpacing="0">
    <tr className="users__heading">
      <th className="users__cell">Name</th>
      <th className="users__cell">Last name</th>
      <th className="users__cell">Phone Number</th>
    </tr>
    {users.map((user, idx) => (<User user={user} key={idx} />))}
  </table>
);

export default Users;
