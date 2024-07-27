import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';  
import axios from 'axios';  
import { PhotosState} from '../types';

const API_URL = 'https://jsonplaceholder.typicode.com';  

export const fetchPhotosByAlbumId = createAsyncThunk('photos/fetchPhotosByAlbumId', async (albumId: string) => {  
  const response = await axios.get(`${API_URL}/albums/${albumId}/photos`);  
  return response.data;  
});  

const initialState: PhotosState = { 
  list: [],  
  loading: false,  
  error: null,  
};  

const photosSlice = createSlice({  
  name: 'photos',  
  initialState,  
  reducers: {},  
  extraReducers: (builder) => {  
    builder  
      .addCase(fetchPhotosByAlbumId.pending, (state) => {  
        state.loading = true;  
      })  
      .addCase(fetchPhotosByAlbumId.fulfilled, (state, action) => {  
        state.loading = false;  
        state.list = action.payload;  
        state.error = null;
      })  
      .addCase(fetchPhotosByAlbumId.rejected, (state, action) => {  
        state.loading = false;  
        state.error = action.error.message || 'Что-то пошло не так';  
      });  
  },  
});  

export default photosSlice.reducer;