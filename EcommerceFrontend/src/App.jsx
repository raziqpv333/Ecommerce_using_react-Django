import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './components/Home';
import Navigation from './components/Navigation'
import './App.css'

function App() {
return(
  <BrowserRouter>
    <Routes> 
      <Route path="/" element={<Navigation />}>
      <Route index element={<Home />}/>
         
      </Route>
    </Routes>
    </BrowserRouter>
);
  
}
export default App
