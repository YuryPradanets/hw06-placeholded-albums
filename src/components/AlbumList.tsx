import { useSelector } from 'react-redux';  

const AlbumList = () => {  
  const { albums, loading, error } = useSelector((state) => state.albums);  

  if (loading) return <p>Loading...</p>;  
  if (error) return <p>Error: {error}</p>;  

  return (  
    <div>  
      <h2>Albums</h2>  
      <ul>  
        {albums.map((album) => (  
          <li key={album.id}>{album.title}</li>  
        ))}  
      </ul>  
    </div>  
  );  
};  

export default AlbumList;