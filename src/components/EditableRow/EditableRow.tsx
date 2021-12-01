import React from 'react'


type Props = {
  editFormDate: any;
  handleEditFormChange: (event: any) => void;
  handleEditFormSubmit: (event: any) => void; 
}

export const EditableRow: React.FC<Props> = ({ editFormDate, handleEditFormChange, handleEditFormSubmit }) => {

  return (
    <form onSubmit={handleEditFormSubmit}>
      <h2>Edit the user</h2>
      <label htmlFor="name">First Name</label>
      <input
        required
        type="text"
        name="first_name"
        id="name"
        onChange={handleEditFormChange}
        value={editFormDate.first_name}
      />
      <label htmlFor="lastName">Last Name</label>
      <input
        required
        type="text"
        id="lastName"
        name="last_name"
        onChange={handleEditFormChange}
        value={editFormDate.last_name}
      />
      <label htmlFor="date">Birth date: </label>
      <input
        type="date"
        id="date"
        name="birth_date"
        required
        onChange={handleEditFormChange}
        value={editFormDate.birth_date}
      />
      <label htmlFor="sex">Gender:</label>
      <select id="sex" name="gender" onChange={handleEditFormChange} value={editFormDate.gender}>
        <option value="male">male</option>
        <option value="female">female</option>
      </select>
      <label htmlFor="job">Job</label>
      <input
        type="text"
        required
        name="job"
        id="job" 
        onChange={handleEditFormChange}
        value={editFormDate.job}
      />
      <label htmlFor="biography">Biography</label>
      <input
        type="text"
        required
        id="biography"
        name="biography" 
        onChange={handleEditFormChange}
        value={editFormDate.biography}
      />
      <input
        type="checkbox"
        id="is_active"
        name="is_active"
        onChange={handleEditFormChange}
        value={editFormDate.is_active}
      />
      <label htmlFor="is_active">Is active</label>
      <button type="submit">Save</button>
      </form>

  )
}

export default EditableRow
