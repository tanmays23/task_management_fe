import React from 'react'
import { Routes , Route, BrowserRouter, } from 'react-router-dom';
import './App.css';

import LoginPage from './components/loginPage'

import AdminPage from './components/AdminPage';

import CreateCredentials from './components/CreateCredentials';
import CreateTask from './components/CreateTask';
import Tasks from './components/Tasks';

 function App() {


  return (
    <BrowserRouter>
    <div className="App">
        <Routes>
          <Route path='/loginPage' element={<LoginPage/>}/>
          
          <Route path='/AdminPage' element={<AdminPage/>}/>
        
          <Route path='/CreateCredentials' element={<CreateCredentials/>}/>
          <Route path='/CreateTask' element={<CreateTask/>}/>
          <Route path='/Tasks' element={<Tasks/>}/>
        </Routes>
    </div>
    </BrowserRouter>
  );
}
export default App;
