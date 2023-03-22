import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from 'react'
import './App.css';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Projects from './Projects';
import Project from './Project';
import Error from './Error';


function App() {
  return (
    // <BrowserRouter >

    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='about' element={<About />} />
      <Route path='projects' element={<Projects />} />
      <Route path='projects/:projectId' element={<Project />} />
      <Route path='contact' element={<Contact />} />
      <Route path='*' element={<Error />} />
    </Routes>

    // </BrowserRouter>
  )
}

export default App;
