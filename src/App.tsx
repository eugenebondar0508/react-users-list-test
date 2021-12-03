import React from 'react';
import './App.css';
import NewUserAddForm from './components/NewUserAddForm/NewUserAddForm';
import UserList from './components/UsersList/UserList';
import { useEffect, useState } from 'react';
import { deleteUser, getUsers } from './api/api';

import { User } from './interfaces/user'
import CurrentUser from './components/CurrentUser/CurrentUser';
import { Route, Routes } from 'react-router';

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
    <Routes>
      <Route path="/" element={<UserList 
        users={users}
        setUserId={setUserId}
        loadUser={loadUser}
      />}/>
      <Route path="newuser" element={<NewUserAddForm 
        users={users} 
        setUsers={setUsers}
      />}/>

      <Route path="currentuser" element={      <CurrentUser 
          userId={selectedUserById}
          deleteUser={(userId: number | undefined) => {
            deleteUser(userId)
              .then(loadUser)
          }}
          setUsers={setUsers}
      />}/>
    </Routes>

    </>
  )
};
export default App;
