import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';  
import axios from 'axios';  

const API_URL = 'https://jsonplaceholder.typicode.com';  

export const fetchUsers = createAsyncThunk('users/fetchUsers', async () => {  
  const response = await axios.get(`${API_URL}/users`);  
  return response.data;  
});  

export const fetchUserById = createAsyncThunk('users/fetchUserById', async (userId: string) => {  
  const response = await axios.get(`${API_URL}/users/${userId}`);  
  return response.data;  
});  

export const fetchUserAlbums = createAsyncThunk('users/fetchUserAlbums', async (userId: string) => {  
  const response = await axios.get(`${API_URL}/users/${userId}/albums`);  
  return response.data;  
});  

const usersSlice = createSlice({  
  name: 'users',  
  initialState: {  
    list: [],  
    selectedUser: null,  
  },  
  reducers: {},  
  extraReducers: (builder) => {  
    builder  
      .addCase(fetchUsers.fulfilled, (state, action) => {  
        state.list = action.payload;  
      })  
      .addCase(fetchUserById.fulfilled, (state, action) => {  
        state.selectedUser = action.payload;  
      });  
  },  
});  

export default usersSlice.reducer;