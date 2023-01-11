import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import LoginLayout from './layouts/LoginLayout'
import UserLayout from './layouts/UserLayout'
import Login from './pages/Login'
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import Profile from './pages/Profile'
import Explain from './pages/Explain';
import AddNew2 from './pages/AddNew2';
import ContextProvider from './components/Context';
import Cost from './components/Cost'
import Edit from './pages/Edit'
import Main from './components/addArtComponents/Main'
import StepContext from './components/addArtComponents/StepContext';
import { StyledEngineProvider } from '@mui/material';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ContextProvider>
    <StyledEngineProvider injectFirst>
      <StepContext>
        <BrowserRouter>
          <Routes>
              <Route element={<LoginLayout/>}>
                  <Route path='/' element={<App />}/>
                  <Route path='/login' element={<Login />}/>
                  <Route path='/register' element={<Register />}/>
              </Route>
              <Route element={<UserLayout/>}>
                  <Route path='/dashboard' element={<Dashboard />}/>
                  <Route path='/profile' element={<Profile />}/>
                  <Route path='/register' element={<Register />}/> 
                  <Route path='/explain' element={<Explain />}/> 
                  <Route path='/add' element={<AddNew2 />}/> 
                  <Route path='/cost' element={<Cost />}/>
                  <Route path='/edit/:id' element={<Edit />}/>
                  <Route path='/newCost' element={<Main />}/>
              </Route>
          </Routes>
        </BrowserRouter>
      </StepContext>
    </StyledEngineProvider>
  </ContextProvider>
 
);


