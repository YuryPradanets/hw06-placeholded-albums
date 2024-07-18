import './App.css';  
import AlbumList from './components/AlbumList';  
import { Album } from './types';  
import { useEffect, useState } from 'react';  // Добавляем импорт нужных хуков из React  
import { getAlbums } from './api/albumsApi';  // Предполагается, что у вас есть функция для получения данных альбомов  

function App() {  
  const [albums, setAlbums] = useState<Album[]>([]); // Создаем состояние для хранения данных альбомов  

  useEffect(() => {  
    const fetchAlbums = async () => {  
      const data = await getAlbums(); // Получаем данные альбомов с помощью функции getAlbums  
      setAlbums(data); // Устанавливаем данные альбомов в состояние  
    };  

    fetchAlbums();  
  }, []);  

  return (  
    <div className="App">  
      <header className="App-header">  
        НАЧНЕМ-С  
        <AlbumList albums={albums} /> {/* Передаем данные альбомов в компонент AlbumList */}  
      </header>  
    </div>  
  );  
}  

export default App;