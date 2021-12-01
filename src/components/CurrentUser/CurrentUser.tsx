import React, { useEffect, useState } from 'react'
import { getUserById, editUser, getUsers } from '../../api/api'
import { User } from '../../interfaces/user'
import EditableRow from '../EditableRow/EditableRow'


type Props = {
  userId: number ;
  deleteUser: (userId: number | undefined) => void;
  users: User[];
  setUsers: (users: User[]) => void;
}
export const CurrentUser:React.FC<Props> = ({ userId, deleteUser, users, setUsers }) => {
 
  const [user, setUser] = useState<User>();


  const [editUserId, setEditUserId] = useState(0);

  const [editFormDate, setEditFormDate] = useState({
    first_name: '',
    last_name: '',
    birth_date: '',
    gender: 'male',
    job: '',
    biography: '',
    is_active: false,
  })

  const handleEditFormChange = (event: any) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute('name');
    const fieldValue = event.target.value;

    const newFormDate: any = { ...editFormDate };
    newFormDate[fieldName] = fieldValue;

    setEditFormDate(newFormDate)
  }

  const handleEditClick = (event: any, user: any) => {
    event.preventDefault();
    setEditUserId(user.id)

    const formValues = {
      first_name: user.first_name,
      last_name: user.last_name,
      birth_date: user.birth_date,
      gender: user.gender,
      job: user.job,
      biography: user.biography,
      is_active: user.is_active,
    }

    setEditFormDate(formValues)
  }

  const handleEditFormSubmit = (event: any) => {
    event.preventDefault();

    const editedUser = {
      id: editUserId,
      first_name: editFormDate.first_name,
      last_name: editFormDate.last_name,
      birth_date: editFormDate.birth_date,
      gender: editFormDate.gender,
      job: editFormDate.job,
      biography: editFormDate.biography,
      is_active: editFormDate.is_active,
    }

    const index = editedUser.id;


    editUser(editedUser, index).then(() => {
      getUsers()
      .then(setUsers);
    })

  }
 
  useEffect(() => {
    getUserById(userId)
      .then(userFromServer => {
        setUser(userFromServer);
      });
 }, [userId]);
 
  return (
    <>
      { editUserId === user?.id ?  <EditableRow editFormDate={editFormDate} handleEditFormChange={handleEditFormChange} handleEditFormSubmit={handleEditFormSubmit}/> : 
      <>
        <h2>{user?.first_name} {' '} {user?.last_name}</h2>
        <p>
          {user?.biography}
          {' '}
          {user?.birth_date}
          {' '}
          {user?.job}
          {' '}
          {user?.gender}
          {' '}
          {user?.is_active}
        <button
          type="button"
          onClick={(event) => handleEditClick(event, user)}
        >Edit</button>
        <button
          type="button"
          onClick={() => deleteUser(user?.id)}
        >
          Delete
        </button>
        </p>
      </>
      }

    </>
  )
}

export default CurrentUser
