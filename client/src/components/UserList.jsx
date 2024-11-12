import React, { useEffect } from 'react';
import UserCard from './UserCard';
import { useGetAllUsers } from '../hooks/user.hook';

export default function UserList() {
  const { data: users } = useGetAllUsers();
  
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 m-2 ">
      {users && users.map((user) => (
        <UserCard key={user._id} user={user} />
      ))}
    </div>
  );
}
