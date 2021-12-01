import React from 'react';
import { deleteUser } from '../../api/api';
import { User } from '../../interfaces/user';
import ReadOnlyRow from '../ReadOnlyRow/ReadOnlyRow';


type Props = {
  users: User[];
  setUserId: (userId: number) => void;
  loadUser: () => void;
}

const UserList: React.FC<Props> = ({ users, setUserId, loadUser }) => {



  return (
    <>
    <div className="App">
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Last Name</th>
            <th>Birthday</th>
            <th>Biography</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <React.Fragment key={user.id}>
            <ReadOnlyRow
              user={user}
              deleteUser={(userId: number) => {
                deleteUser(userId)
                  .then(loadUser);
              } }
              setUserId={setUserId} />
            </React.Fragment>
          ))}
        </tbody>
      </table>
    </div>
    </>
  );
  
}

export default UserList

