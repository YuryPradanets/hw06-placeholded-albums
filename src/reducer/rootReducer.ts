import { combineReducers } from 'redux';  
import albumsReducer from '../features/albumsSlice';  
import usersReducer from '../features/usersSlice';  

const rootReducer = combineReducers({  
  albums: albumsReducer,  
  users: usersReducer,  
});  

export default rootReducer;