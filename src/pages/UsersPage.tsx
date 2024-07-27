import React, { useEffect } from 'react';  
import { useDispatch, useSelector } from 'react-redux';  
import { useParams, Link } from 'react-router-dom';  
import { fetchUserById, fetchUserAlbums } from '../features/usersSlice';  

export const UserDetail: React.FC = () => {  
  const { id } = useParams<{ id: string }>();  
  const dispatch = useDispatch();  
  const user = useSelector((state) => state.users.selectedUser);  
  const albums = useSelector((state) => state.albums.userAlbums);  

  useEffect(() => {  
    if (id) {  
      dispatch(fetchUserById(id));  
      dispatch(fetchUserAlbums(id));  
    }  
  }, [dispatch, id]);  

  return (  
    <div>  
      <Link to="/users">&#8592; Назад</Link>  
      {user ? (  
        <>  
          <h1>{user.username}</h1>  
          <p>{user.name}</p>  
          <p>{user.email}</p>  
          <p>Компания: {user.company?.name}</p>  
          <h2>Альбомы:</h2>  
          <ul>  
            {albums.map((album) => (  
              <li key={album.id}>  
                <Link to={`/albums/${album.id}`}>{album.title}</Link>  
              </li>  
            ))}  
          </ul>  
        </>  
      ) : (  
        <p>Загрузка...</p>  
      )}  
    </div>  
  );  
};