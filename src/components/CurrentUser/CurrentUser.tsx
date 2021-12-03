import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { getUserById, editUser, getUsers } from '../../api/api'
import { User } from '../../interfaces/user'
import EditableRow from '../EditableRow/EditableRow'
import './CurrentUser.css'


type Props = {
  userId: number ;
  deleteUser: (userId: number | undefined) => void;
  setUsers: (users: User[]) => void;
}
export const CurrentUser:React.FC<Props> = ({ userId, deleteUser, setUsers }) => {
 
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
        <Link to="/" className="back">
          Back to the users list
        </Link>
        <div  className="current-user">
        <h3>{user?.first_name} {' '} {user?.last_name}</h3>
          Biography: {' '}{user?.biography} <br></br>
          Birthday:{' '}{user?.birth_date}<br></br>
          Job:{' '}{user?.job}<br></br>
          Sex:{' '}{user?.gender}<br></br>
          {user?.is_active}<br></br>
        <button
          type="button"
          onClick={(event) => handleEditClick(event, user)}
          className="edit-btn"
        >Edit</button>
        <Link to="/"
          onClick={() => deleteUser(user?.id)}
          className="delete-link"
        >
          Delete
        </Link>
        </div>
      </>
      }

    </>
  )
}

export default CurrentUser
