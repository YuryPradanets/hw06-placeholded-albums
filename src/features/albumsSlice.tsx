import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';  
import axios from 'axios';  
import { Album, Photo } from '../types';

const API_URL = 'https://jsonplaceholder.typicode.com';  

interface AlbumsState {  
  list: Album[];  
  selectedAlbum: Album | null;  
  photos: Photo[];  
  userAlbums: Album[];  
}  

const initialState: AlbumsState = {  
  list: [],  
  selectedAlbum: null,  
  photos: [],  
  userAlbums: [],  
};  

export const fetchAlbums = createAsyncThunk('albums/fetchAlbums', async () => {  
  const response = await axios.get(`${API_URL}/albums`);  
  return response.data;  
});  

export const fetchAlbumById = createAsyncThunk('albums/fetchAlbumById', async (albumId: string) => {  
  const response = await axios.get(`${API_URL}/albums/${albumId}`);  
  return response.data;  
});  

export const fetchPhotosByAlbumId = createAsyncThunk('albums/fetchPhotosByAlbumId', async (albumId: string) => {  
  const response = await axios.get(`${API_URL}/albums/${albumId}/photos`);  
  return response.data;  
});  

const albumsSlice = createSlice({  
  name: 'albums',  
  initialState,  
  reducers: {},  
  extraReducers: (builder) => {  
    builder  
      .addCase(fetchAlbums.fulfilled, (state, action) => {  
        state.list = action.payload;  
      })  
      .addCase(fetchAlbumById.fulfilled, (state, action) => {  
        state.selectedAlbum = action.payload;  
      })  
      .addCase(fetchPhotosByAlbumId.fulfilled, (state, action) => {  
        state.photos = action.payload;  
      });  
  },  
});  

export default albumsSlice.reducer;  
export const albumsActions = albumsSlice.actions;