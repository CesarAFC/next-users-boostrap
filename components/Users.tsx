'use client';

import { User } from '@/types/UsersTypes';
import {useRouter} from 'next/navigation'

type UserProps = {
    users: User[]
}

function Users({users}: UserProps) {

    const router = useRouter();

  return (
    <ul className='list-group'>
    {
      users.map( (user: User) => (
        <li key={user.id} 
        className='list-group-item d-flex justify-content-between align-items-center list-group-item-action'
        onClick={() => {
            router.push(`users/${user.id}`)
        }}
        >
          <div>
            <h5>{user.id} {user.first_name} {user.last_name}</h5>
            <p>{user.email}</p>
          </div>
          <img src={user.avatar} alt={user.email} style={{borderRadius: '50%'}}/>
        </li>
      ))
    }
  </ul>
  )
}

export default Users