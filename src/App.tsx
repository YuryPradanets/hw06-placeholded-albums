import React, { useEffect } from 'react';  
import { useDispatch } from 'react-redux';  
import { fetchAlbums } from './features/albumsSlice';  
import { fetchUsers } from './features/usersSlice';  
import AlbumList from './components/AlbumList';  
import UserList from './components/UserList';  

function App() {  
  const dispatch = useDispatch();  

  useEffect(() => {  
    dispatch(fetchAlbums());  
    dispatch(fetchUsers());  
  }, [dispatch]);  

  return (  
    <div>  
      <h1>Placeholder Albums</h1>  
      <AlbumList />  
      <UserList />  
    </div>  
  );  
}  

export default App;