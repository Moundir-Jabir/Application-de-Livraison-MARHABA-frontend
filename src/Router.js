import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import Home from './pages/Accueil/Home'
import Login from './pages/Accueil/Login'
import Register from './pages/Accueil/Register'
import ForgotPassword from './pages/Accueil/ForgotPassword'
import Dashboard from './pages/User/Dashboard'

const Router = () => {
    return (
        <Routes>
            <Route path='/' element={<Navigate to="home" />} />
            <Route path='home' element={<Home />} />
            <Route path='register' element={<Register />} />
            <Route path='login' element={<Login />} />
            <Route path='forgotpassword' element={<ForgotPassword />} />
            <Route path='dashboard' element={<Dashboard />} />
        </Routes>
    )
}

export default Router