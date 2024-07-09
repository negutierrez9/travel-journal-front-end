import React from 'react'
import MainContent from './MainContent'
import Login from './components/Login'
import Register from './components/Register'
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
          <Route path="/login" element={<Login />}></Route>
          <Route path="/register" element={<Register />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
