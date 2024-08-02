import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sample from './components/Sample';
import Navigation from './components/Navigation'
// import './App.css'

function App() {
return(
  <BrowserRouter>
    <Routes> 
      <Route path="/" element={<Navigation />}>
      <Route index element={<Sample />}/>
         
      </Route>
    </Routes>
    </BrowserRouter>
);
  
}
export default App
