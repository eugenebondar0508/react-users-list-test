import React from 'react'
import { User } from '../../interfaces/user'
type Props = {
  user: User;
  deleteUser: (userId: number) => void;
  setUserId: (userId: number) => void;
}

const ReadOnlyRow: React.FC<Props> = ({ user, setUserId, deleteUser }) => {
  return (
    <React.Fragment key={user.id}>
      <tr onClick={() => setUserId(user.id)}>
        <th>{user.first_name}</th>
        <th>{user.last_name}</th>
        <th>{user.birth_date}</th>
        <th>{user.biography}</th>
        <th>
          <button
            type="button"
            onClick={() => deleteUser(user.id)}
          >
            Delete
          </button>
          </th>
        </tr>
      </React.Fragment>
  )
}

export default ReadOnlyRow
