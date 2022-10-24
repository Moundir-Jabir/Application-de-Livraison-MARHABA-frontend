import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import Home from './pages/Accueil/Home'
import Login from './pages/Accueil/Login'

const Router = () => {
    return (
        <Routes>
            <Route path='/' element={<Navigate to="home" />} />
            <Route path='home' element={<Home />} />
            <Route path='login' element={<Login />} />
        </Routes>
    )
}

export default Router