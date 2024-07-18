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

// Другие необходимые типы данных