import { useSelector } from 'react-redux';
import { Album, RootState } from '../types';

export const AlbumList = () => {  
  const { albums, loading, error } = useSelector((state: RootState) => state.albums);  

  if (loading) return <p>Loading...</p>;  
  if (error) return <p>Error: {error}</p>;  

  return (  
    <div>  
      <h2>Albums</h2>  
      <ul>  
        {albums.map((album: Album) => (  
          <li key={album.id}>{album.title}</li>  
        ))}  
      </ul>  
    </div>  
  );  
};