import { useSelector } from 'react-redux';
import { RootState } from '../types.js'; 

const UserList = React.FC = () => {  

  const { users, loading, error } = useSelector((state:RootState) => state.users);  

  if (loading) return <p>Loading...</p>;  
  if (error) return <p>Error: {error}</p>;  

  return (  
    <div>  
      <h2>Users</h2>  
      <ul>  
        {users.map((user: any) => (  
          <li key={user.id}>{user.name}</li>  
        ))}  
      </ul>  
    </div>  
  );  
};  

export default UserList;

// import React from 'react';  
// import { useSelector } from 'react-redux';  
// import { RootState } from './path-to-your-types';  

// const MyComponent: React.FC = () => {  
//   const { users, loading, error } = useSelector((state: RootState) => state.users);  

//   return (  
//     <div>  
//       {loading && <p>Loading...</p>}  
//       {error && <p>Error: {error}</p>}  
//       <ul>  
//         {users.map(user => (  
//           <li key={user.id}>{user.name}</li>  
//         ))}  
//       </ul>  
//     </div>  
//   );  
// };  

// export default MyComponent;