/* eslint-disable no-unused-vars */
import React from 'react'
import { BrowserRouter as Router, Navigate, Route, Routes, useNavigate } from 'react-router-dom'
import { DetailPage } from './Pages/DetailPage'
import { LoginPage } from './Pages/LoginPage'
import { ProfilePage } from './Pages/ProfilePage'
import { Pruebas } from './Pages/Pruebas'
import { HomePage } from './Pages/HomePage'
import NewLodgingPage from './Pages/NewLodgingPage'

export const PageRoutes = () => 
    <Router>
        <Routes>
            <Route exact={true} path="/login" element={<LoginPage/>} />
            <Route exact={true} path="/profile" element={<ProfilePage/>} />
            <Route exact={true} path="/detail/:id" element={<DetailPage/>} />
            <Route exact={true} path="/newLodging" element={<NewLodgingPage/>} />
            <Route exact={true} path="/pruebas" element={<Pruebas/>} />
            <Route exact={true} path="/home" element={<HomePage/>} />
            <Route path="*" element={<Navigate path="*" to="/home"/>}></Route>
        </Routes>
    </Router>