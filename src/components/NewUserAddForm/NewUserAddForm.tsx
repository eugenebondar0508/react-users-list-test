import React, { useState } from 'react';

import { User } from '../../interfaces/user';
import { addUser, getUsers } from '../../api/api';

import './NewUserAddForm.css'
import { Link } from 'react-router-dom';


type Props = {
  users: User[];
  setUsers: (users: User[]) => void;
}

const NewUserAddForm: React.FC<Props> = ({ users, setUsers}) => {

  const [addFormDate, setAddFormDate] = useState({
    first_name: '',
    last_name: '',
    birth_date: '',
    gender: 'male',
    job: '',
    biography: '',
    is_active: false,
  })

  const handleAddFormChange = (event: any) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute('name');
    const fieldValue = event.target.value;


    const newFormDate: any = { ...addFormDate };
    newFormDate[fieldName] = fieldValue;

    setAddFormDate(newFormDate);
  }

  const handleAddFormSubmit = (event: any) => {
    event.preventDefault();

    const newUser = {
      id: users.length + 1,
      first_name: addFormDate.first_name,
      last_name: addFormDate.last_name,
      birth_date: addFormDate.birth_date,
      gender: addFormDate.gender,
      job: addFormDate.job,
      biography: addFormDate.biography,
      is_active: addFormDate.is_active,
    };


    addUser(newUser).then(() => {
      getUsers()
      .then(setUsers);
      event.target.reset();
    })


  }

  return (
    <>
    <Link to="/" className="back">
    ‹ Back to the users list
    </Link>
      <h2>Add a new user </h2>
      <form onSubmit={handleAddFormSubmit} className="new-user">
        <label htmlFor="name">First Name:</label>
        <input 
          required
          type="text" 
          name="first_name"
          id="name" 
          onChange={handleAddFormChange}
        />

        <label htmlFor="lastName">Last Name:</label>
        <input
          required 
          type="text" 
          id="lastName" 
          name="last_name"
          onChange={handleAddFormChange}
        />

        <label htmlFor="date">Birth date: </label>
        <input 
          type="date" 
          id="date"  
          name="birth_date"
          required
          onChange={handleAddFormChange}
        />

        <label htmlFor="sex">Gender:</label>
        <select id="sex" name="gender" onChange={handleAddFormChange}>
          <option value="male">male</option>
          <option value="female">female</option>
        </select>

        <label htmlFor="job">Job:</label>
        <input 
          type="text" 
          required 
          name="job" 
          id="job" 
          onChange={handleAddFormChange}
        />

        <label htmlFor="biography">Biography:</label>
        <textarea 
          required 
          id="biography" 
          name="biography" 
          onChange={handleAddFormChange}
        />


        <label htmlFor="is_active">Is active:</label>
        <input 
          type="checkbox" 
          id="is_active" 
          name="is_active" 
          onChange={handleAddFormChange}
        />
        <button type="submit">
          Send
        </button>
      </form>
    
    </>
  )

}

export default NewUserAddForm
