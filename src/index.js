import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.js';
import "./index.css";
import store from './store.js';
import { Provider } from 'react-redux'
import { 
  Route, 
  RouterProvider, 
  createBrowserRouter, 
  createRoutesFromElements 
} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './features/auth/Login.jsx';
import Main from './features/auth/Main.jsx';
import Register from './features/auth/Register.jsx';
import PrivateRoute from './components/PrivateRoute.jsx';


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />} >
      <Route index={true} path="/" element={<Login />} />
      <Route path="/login" element={<Login />} />
      <Route path='/register' element={<Register />} />
      {/* Private Routes */}
      <Route path='' element={<PrivateRoute />} >
        <Route path='/main' element={<Main />} />
      </Route>
    </Route>
  )
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
  <React.StrictMode>
       <RouterProvider router={router} />
  </React.StrictMode>
  </Provider>
);


