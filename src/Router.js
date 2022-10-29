import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import Home from './pages/Accueil/Home'
import Login from './pages/Accueil/Login'
import Register from './pages/Accueil/Register'
import ForgotPassword from './pages/Accueil/ForgotPassword'
import Dashboard from './pages/User/Dashboard'
import { isAuthenticated } from './helpers'

const Router = () => {

    const PrivateRoute = ({ children }) => {
        return isAuthenticated() ? children : <Navigate to="/login" />
    }

    const PublicRoute = ({ children }) => {
        return isAuthenticated() ? <Navigate to="/dashboard" /> : children
    }

    return (
        <Routes>
            <Route path='/' element={<Navigate to="home" />} />
            <Route path='home' element={<PublicRoute><Home /></PublicRoute>} />
            <Route path='register' element={<PublicRoute><Register /></PublicRoute>} />
            <Route path='login' element={<PublicRoute><Login /></PublicRoute>} />
            <Route path='forgotpassword' element={<PublicRoute><ForgotPassword /></PublicRoute>} />
            <Route path='dashboard' element={<PrivateRoute><Dashboard /></PrivateRoute>} />
        </Routes>
    )
}

export default Router