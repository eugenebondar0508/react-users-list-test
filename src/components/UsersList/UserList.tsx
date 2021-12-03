import React from 'react';
import { Link } from 'react-router-dom';
import { deleteUser } from '../../api/api';
import { User } from '../../interfaces/user';
import NewUserAddForm from '../NewUserAddForm/NewUserAddForm';
import ReadOnlyRow from '../ReadOnlyRow/ReadOnlyRow';
import './UserList.css'


type Props = {
  users: User[];
  setUserId: (userId: number) => void;
  loadUser: () => void;
}

const UserList: React.FC<Props> = ({ users, setUserId, loadUser }) => {



  return (
    <>
    <h2>Users list</h2>
    <div className="list">
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

    <Link to="/newuser" className="add-btn">
    <button >Add a new user</button>
    </Link>
    </>
  );
  
}

export default UserList

