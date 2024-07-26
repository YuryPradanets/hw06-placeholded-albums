import { configureStore } from '@reduxjs/toolkit';  
import albumsReducer from './features/albumsSlice';  
import usersReducer from './features/usersSlice';  

export const store = configureStore({  
  reducer: {  
    albums: albumsReducer,  
    users: usersReducer,  
  },  
});