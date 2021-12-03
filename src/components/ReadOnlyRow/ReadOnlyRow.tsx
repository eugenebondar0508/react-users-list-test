import React from 'react'
import { Link } from 'react-router-dom'
import { User } from '../../interfaces/user'
import './ReadOnlyRow.css'
type Props = {
  user: User;
  deleteUser: (userId: number) => void;
  setUserId: (userId: number) => void;
}

const ReadOnlyRow: React.FC<Props> = ({ user, setUserId, deleteUser }) => {
  
  return (
    <React.Fragment key={user.id}>
      <tr onClick={() => setUserId(user.id)} className="user">
        
        <th>{user.first_name}</th>
        <th>{user.last_name}</th>
        <th>{user.birth_date}</th>
        <th>{user.biography}</th>

        <th>
          <button className="btn-link">
            <Link to={`currentuser`} className="link">
              More info
            </Link>
          </button>
        </th>
        
        <th>
          <button
            type="button"
            onClick={() => deleteUser(user.id)}
            className="btn"
          >
            Delete
          </button>
        </th>
        </tr>
      </React.Fragment>
  )
}

export default ReadOnlyRow
