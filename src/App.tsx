import React from 'react';  
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';  
import { Provider } from 'react-redux';  
import {store} from './store';  
import {AlbumDetail} from './pages/AlbumDetailPage';  
import {UserDetail} from './pages/UsersPage';  
import {UserProfile} from './pages/UserDetailsPage';  

export const App: React.FC = () => {  
  return (  
    <Provider store={store}>  
      <Router>  
        <Routes>  
          <Route path="/albums/:id" element={<AlbumDetail />} />  
          <Route path="/users" element={<UserDetail/>} />  
          <Route path="/users/:id" element={<UserProfile />} />  
        </Routes>  
      </Router>  
    </Provider>  
  );  
};