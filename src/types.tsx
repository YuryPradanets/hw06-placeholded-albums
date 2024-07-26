export interface Album {  
  userId: number;  
  id: number;  
  title: string;
  albums: string;
}  

export interface Photo {  
  albumId: number;  
  id: number;  
  title: string;  
  url: string;  
  thumbnailUrl: string;  
}  

export interface User {  
  id: number;  
  name: string;  
  username: string;  
  email: string;  
}  
interface UserState {  
  users: User[];  
  loading: boolean;  
  error: string | null;  
}  


interface AlbumsState {  
  albums: Album[];  
  loading: boolean;  
  error: string | null;  
}  

export interface RootState {  
   users: UserState;   
  albums: AlbumsState;
}  
