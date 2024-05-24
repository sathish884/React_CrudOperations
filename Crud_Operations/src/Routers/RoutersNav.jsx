import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Dashboard from '../Components/Dashboard'
import Read_Comp from '../Components/Read_Comp'

function RoutersNav() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/read" element={<Read_Comp />} />
            </Routes>
        </>
    )
}

export default RoutersNav