import React, { useEffect, useState } from 'react';  
import { Album } from '../types';  
import { getAlbums } from '../api/albumsApi';  

interface AlbumListProps {  
  albums: Album[];  
}

const AlbumList: React.FC<AlbumListProps> = () => {  
  const [albums, setAlbums] = useState<Album[]>([]);  

  useEffect(() => {  
    const fetchAlbums = async () => {  
      const data = await getAlbums();  
      setAlbums(data);  
    };  

    fetchAlbums();  
  }, []);  

  return (  
    <div>  
       <h1>My Album Collection</h1>  
      <AlbumList albums={albums} />
    </div>  
  );  
};  

export default AlbumList;