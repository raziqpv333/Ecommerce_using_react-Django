import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import Home from './components/Home';
import Navigation from './components/Navigation'

function App() {

  return (
    <>
      <BrowserRouter>
    <Routes> 
      {/* <Route path="/" element={<Navigation />}> */}
      {/* <Route index element={< />}/> */}
      <Route path="/" element={<Home/>}>
      </Route>
    </Routes>
    </BrowserRouter>

    </>
  )
}

export default App
