/* Import Others */
import React from 'react';
import { Route, Routes, BrowserRouter } from "react-router-dom";

/* Import Compontonents */
import Home from "./components/Home";
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import Registers from './components/Registers';

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={ <Home /> } path="/" exact />
                <Route element={ <Login /> } path="/login" />
                <Route element={ <Dashboard /> } path="/dashboard" />
                <Route element={<Registers />} path="/meus-registros" />
            </Routes>
        </BrowserRouter>
    )
}

export default Router;

