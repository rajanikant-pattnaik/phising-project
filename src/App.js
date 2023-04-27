import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import UserLoginPage from './pages/UserLoginPage'
import AdminLoginPage from './pages/AdminLoginPage'
import Login from './pages/Login'
import UserHomePage from './pages/UserHomePage'
import AdminHomePage from './pages/AdminHomePage'
const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
         <Route path='/userPage' element={<UserHomePage/>}/>
         <Route path='/adminPage' element={<AdminHomePage/>}/>
         <Route path='/' element={<Login/>}/>
         <Route path='/userLogin' element={<UserLoginPage/>}/>
         <Route path='/adminLogin' element={<AdminLoginPage/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
