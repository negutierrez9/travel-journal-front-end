import React from 'react'
import MainContent from './MainContent'
import Login from './components/Login'
import Register from './components/Register'
import Editor from './components/Editor'

import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom'

function App() {
  return (
    <div className="main-container">
      <BrowserRouter>
        <Routes>
          <Route path="/home" element={<MainContent />}></Route>
          <Route path="/" element={<Login />}></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route path="/editor" element={<Editor />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
};

export default App
