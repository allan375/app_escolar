import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './css/globals.css'
import Introducao from './pages/Introducao'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Navigate to='/introducao'/>}/>
        <Route path='/introducao' element={<Introducao/>}/>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
