import { FC } from 'react';  
import { useSelector } from 'react-redux';
import { RootState, User } from '../types';

export const UserList: FC = () => {  
  
  const { users, loading, error } = useSelector((state: RootState) => state.users);  

  if (loading) return <p>Loading...</p>;  
  if (error) return <p>Error: {error}</p>;  

  return (  
    <div>  
      <h2>Users</h2>  
      <ul>  
        {users.map((user: User) => (
          <li key={user.id}>{user.name}</li>  
        ))}  
      </ul>  
    </div>  
  );  
};