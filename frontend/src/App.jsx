import React from 'react'
import { Routes, Route } from "react-router-dom";
import Home from '../page/Home'
import Signin from '../page/Signin'
import Navbar from '../components/Navbar'
import QuestionsList from '../components/QuestionsList'

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/questionlist" element={<QuestionsList />} />
      </Routes>
    </div>
  )
}

export default App

