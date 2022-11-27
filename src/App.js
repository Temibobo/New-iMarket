import React from 'react';
import Home from "./Pages/Home";
import Login from './Pages/Login';
import Signup from './Pages/Signup';
import Verify from './Pages/Verify';
import Create from './Pages/Create';
import Create2 from './Pages/Create2';
import Popup from './Pages/Popup';
import {BrowserRouter, Routes, Route } from 'react-router-dom';


const App =() =>{

  return(
    <BrowserRouter>

    <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/signup' element={<Signup/>}/>
          <Route path='/verify' element={<Verify/>}/>
          <Route path='/create' element={<Create/>}/>
          <Route path='/create2' element={<Create2/>}/>
          <Route path='/popup' element={<Popup/>}/>
          <Route path='/Home' element={<Home/>}/>

    </Routes>

    </BrowserRouter>
  )

}

export default App;