import React, { useEffect } from 'react';  
import { useDispatch, useSelector } from 'react-redux';  
import { useParams, Link } from 'react-router-dom';  
import { fetchAlbumById, fetchPhotosByAlbumId } from '../features/albumsSlice';
import { Photo, RootState } from '../types';
import { AppDispatch } from '../components/PhotoList';


export const AlbumDetail: React.FC = () => {  
  const { id } = useParams<{ id: string }>();  
   const dispatch = useDispatch<AppDispatch>();
  const album = useSelector((state: RootState) => state.albums);  
  const photos = useSelector((state: RootState) => state.photos.photos);  

  useEffect(() => {  
    if (id) {  
      dispatch(fetchAlbumById(id));  
      dispatch(fetchPhotosByAlbumId(id));  
    }  
  }, [dispatch, id]);  

  return (  
    <div>  
      <Link to="/albums">&#8592; Назад</Link>  
      {album ? (  
        <>  
          <h1>{album.title}</h1>  
          <Link to={`/users/${album.userId}`}> (открыть страницу автора) </Link>  
          <img src={album.url} alt={album.title} />  
          <h2>Фотографии:</h2>  
          {photos.map((photo: Photo) => (
            <div key={photo.id}>  
              <a href={photo.url} target="_blank" rel="noopener noreferrer">  
                <img src={photo.thumbnailUrl} alt={photo.title} />  
                <p>{photo.title}</p>  
              </a>  
            </div>  
          ))}  
        </>  
      ) : (  
        <p>Загрузка...</p>  
      )}  
    </div>  
  );  
};