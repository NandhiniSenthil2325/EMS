import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import LoginPage from './pages/LoginPage'
import AdminPage from './pages/AdminPage'
import EmployeePage from './pages/EmployeePage'
import PrivateRoute from './components/Common/PrivateRoute'

import Register from "./pages/Register";
import { AuthProvider } from "./contexts/AuthContext";
import "./index.css";

export default function App(){
return (
<Routes>
<Route path="/login" element={<LoginPage/>} />
<Route path="/admin/*" element={<PrivateRoute role="admin"><AdminPage/></PrivateRoute>} />
<Route path="/employee/*" element={<PrivateRoute role="employee"><EmployeePage/></PrivateRoute>} />
<Route path="/" element={<Navigate to="/login" replace />} />
<Route path="*" element={<div style={{padding:40}}>Page not found</div>} />

<Route path="/register" element={<Register />} />

</Routes>
)
}



