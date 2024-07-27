import React, { useEffect } from 'react';  
import { useDispatch, useSelector } from 'react-redux';  
import { useParams } from 'react-router-dom';  
import { fetchUserById } from '../features/usersSlice';  
import { RootState } from '../store';  

export const UserProfile: React.FC = () => {  
  const { id } = useParams<{ id: string }>();  
  const dispatch = useDispatch();  
  const user = useSelector((state: RootState) => state.users.find(u => u.id.toString() === id));  

  useEffect(() => {  
    if (id) {  
      dispatch(fetchUserById(id));  
    }  
  }, [dispatch, id]);  

  return (  
    <div>  
      {user ? (  
        <>  
          <h1>{user.name}</h1>  
          <p>Email: {user.email}</p>  
          <p>Телефон: {user.phone}</p>  
          <p>Город: {user.address.city}</p>  
        </>  
      ) : (  
        <p>Загрузка...</p>  
      )}  
    </div>  
  );  
};