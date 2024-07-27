import React, { useEffect } from 'react';  
import { useDispatch, useSelector } from 'react-redux';  
import { fetchAlbums } from '../features/albumsSlice';  
import { Link } from 'react-router-dom';  

export const AlbumsPage: React.FC = () => {  
  const dispatch = useDispatch();  
  const albums = useSelector((state) => state.albums.list);  

  useEffect(() => {  
    dispatch(fetchAlbums());  
  }, [dispatch]);  

  return (  
    <div>  
      <h1>Альбомы</h1>  
      <div>  
        {albums.map((album) => (  
          <div key={album.id} style={{ margin: '10px' }}>  
            <Link to={`/albums/${album.id}`}>  
              <img src={album.thumbnailUrl} alt={album.title} />  
              <p>{album.title}</p>  
            </Link>  
          </div>  
        ))}  
      </div>  
    </div>  
  );  
};