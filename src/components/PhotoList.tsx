import React, { useEffect } from 'react';  
import { useDispatch, useSelector } from 'react-redux';  
import { fetchPhotosByAlbumId } from '../features/photoSlice';  
import { RootState, Photo, PhotosListProps } from '../types';  
import { store } from '../store';

export type AppDispatch = typeof store.dispatch;

export const PhotosList: React.FC<PhotosListProps> = ({ albumId }) => {  
  const dispatch = useDispatch<AppDispatch>();
  
  const { photos, loading, error } = useSelector((state: RootState) => state.photos);  

  useEffect(() => {  
    dispatch(fetchPhotosByAlbumId(albumId));  
  }, [dispatch, albumId]);  

  if (loading) return <p>Загрузка...</p>;  
  if (error) return <p>{error}</p>;  

  return (  
    <ul>  
      {photos.map((photo: Photo) => (  
        <li key={photo.id}>  
          <img src={photo.thumbnailUrl} alt={photo.title} />  
          <p>{photo.title}</p>  
        </li>  
      ))}  
    </ul>  
  );  
};