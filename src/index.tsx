import React from 'react';  
import ReactDOM from 'react-dom/client';  
import { Provider } from 'react-redux';  
import { store } from './store';  
import App from './App';  
import reportWebVitals from './reportWebVitals';


const rootElement = document.getElementById('root');   

if (rootElement) {  
  const root = ReactDOM.createRoot(rootElement);  
  
  root.render(  
    <Provider store={store}>  
      <App />  
    </Provider>  
  );  

  reportWebVitals();  
} else {  
  console.error("Element with id 'root' not found");  
}