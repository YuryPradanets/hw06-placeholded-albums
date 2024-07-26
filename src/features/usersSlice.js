import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';  
import axios from 'axios';  

const API_BASE_URL = 'https://jsonplaceholder.typicode.com';  

export const fetchUsers = createAsyncThunk('users/fetchUsers', async () => {  
  const response = await axios.get(`${API_BASE_URL}/users`);  
  return response.data;  
});  

const usersSlice = createSlice({  
  name: 'users',  
  initialState: {  
    users: [],  
    loading: false,  
    error: null,  
  },  
  reducers: {},  
  extraReducers: (builder) => {  
    builder  
      .addCase(fetchUsers.pending, (state) => {  
        state.loading = true;  
      })  
      .addCase(fetchUsers.fulfilled, (state, action) => {  
        state.users = action.payload;  
        state.loading = false;  
      })  
      .addCase(fetchUsers.rejected, (state, action) => {  
        state.loading = false;  
        state.error = action.error.message;  
      });  
  },  
});  

export default usersSlice.reducer;