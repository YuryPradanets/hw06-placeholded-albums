export interface Album {  
  userId: number;  
  id: number;  
  title: string;
  albums: string;
  selectedAlbum: Album | null | undefined;
}  
export interface AlbumsState {  
  albums: Album[];  
  loading: boolean;  
  error: string | null;
  selectedAlbum: Album | string | null;
  title: string;
  userId: number;
  url: string;
  }
export interface Photo {  
  albumId: number;  
  id: number;  
  title: string;  
  url: string;  
  thumbnailUrl: string;  
}  

export interface PhotosState {  
  list: Photo[];  
  loading: boolean;  
  error: string | null;
}  

export interface User {  
  id: number;  
  name: string;  
  username: string;  
  email: string;  
}  
export interface UserState {  
  users: User[];  
  loading: boolean;  
  error: string | null;  
}  
export interface PhotosListProps {  
  albumId: string;  
}
export interface RootState {  
  users: UserState;   
  albums: AlbumsState;  
  photos: PhotosState;
}

