import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';  
import axios from 'axios';  

const API_BASE_URL = 'https://jsonplaceholder.typicode.com';  

export const fetchAlbums = createAsyncThunk('albums/fetchAlbums', async () => {  
  const response = await axios.get(`${API_BASE_URL}/albums`);  
  return response.data;  
});  

const albumsSlice = createSlice({  
  name: 'albums',  
  initialState: {  
    albums: [],  
    loading: false,  
    error: null,  
  },  
  reducers: {},  
  extraReducers: (builder) => {  
    builder  
      .addCase(fetchAlbums.pending, (state) => {  
        state.loading = true;  
      })  
      .addCase(fetchAlbums.fulfilled, (state, action) => {  
        state.albums = action.payload;  
        state.loading = false;  
      })  
      .addCase(fetchAlbums.rejected, (state, action) => {  
        state.loading = false;  
        state.error = action.error.message;  
      });  
  },  
});  

export default albumsSlice.reducer;