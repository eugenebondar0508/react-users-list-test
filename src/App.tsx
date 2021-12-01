import React from 'react';
import './App.css';
import NewUserAddForm from './components/NewUserAddForm/NewUserAddForm';
import UserList from './components/UsersList/UserList';
import { useEffect, useState } from 'react';
import { deleteUser, getUsers } from './api/api';

import { User } from './interfaces/user'
import CurrentUser from './components/CurrentUser/CurrentUser';

const App: React.FC = () => {

  const [users, setUsers] = useState<User[]>([]);
  const [selectedUserById, setUserId] = useState(0)

  const loadUser = () => {
    getUsers()
    .then(setUsers);
  }

  useEffect(loadUser, [])
  return (
    <>
      <UserList 
        users={users}
        setUserId={setUserId}
        loadUser={loadUser}
      />
      <NewUserAddForm 
        users={users} 
        setUsers={setUsers}
      />

        <CurrentUser 
          userId={selectedUserById}
          deleteUser={(userId: number | undefined) => {
            deleteUser(userId)
              .then(loadUser)
          }}
          users={users}
          setUsers={setUsers}
        />
    </>
  )
};
export default App;
