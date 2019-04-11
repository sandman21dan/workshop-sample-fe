import * as React from 'react';

import './Users.scss';

const User: React.FunctionComponent = () => (
  <tr>
    <td></td>
  </tr>
);

const Users: React.FunctionComponent = () => (
  <table className="users">
    <th>
      <td>Name</td>
      <td>Last name</td>
      <td>Phone Number</td>
    </th>
  </table>
);

export default Users;
