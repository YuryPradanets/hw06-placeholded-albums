import { configureStore } from '@reduxjs/toolkit';  
import albumsReducer from './features/albumsSlice';  
import usersReducer from './features/usersSlice';  
import photosReducer from './features/photoSlice'; 
import rootReducer from './reducer/rootReducer';

export const store = configureStore({  
  reducer: {  
    albums: albumsReducer,  
    users: usersReducer,  
    photos: photosReducer, 
    reducer: rootReducer,
  },  
});


export type AppDispatch = typeof store.dispatch;  
