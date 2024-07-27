import React from 'react';  
import { Link } from 'react-router-dom';  

export const HomePage: React.FC = () => {  
  return (  
    <div>  
      <h1>Добро пожаловать!</h1>  
      <nav>  
        <ul>  
          <li>  
            <Link to="/albums">Посмотреть альбомы</Link>  
          </li>  
          <li>  
            <Link to="/users">Посмотреть пользователей</Link>  
          </li>  
        </ul>  
      </nav>  
    </div>  
  );  
};