import { useState } from 'react'
import './App.css'
import {Routes, Route} from "react-router-dom"
import ErrorBoundary from "./components/ErrorBoundary/v_1"
import  Navbar from "./components/Navbar/v_1"
import  Sidebar from "./components/Sidebar/v_1"
import Home from './pages/Home'

function App() {
  return (
    <>
      <ErrorBoundary>
        {/* Navbar */}
        <Navbar />
        <div className="flex">
          {/* Sidebar */}
          <Sidebar></Sidebar>
          {/* Routes */}
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </div>
      </ErrorBoundary>
    </>
  )
}

export default App
