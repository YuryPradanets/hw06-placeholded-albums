import axios from 'axios';  
import { Album } from '../types';  

const BASE_URL = 'https://jsonplaceholder.typicode.com';  

export const getAlbums = async (): Promise<Album[]> => {  
  try {  
    const response = await axios.get(`${BASE_URL}/albums`);  
    return response.data as Album[];  
  } catch (error) {  
    console.error('Error while fetching albums:', error);  
    return [];  
  }  
};