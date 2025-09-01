import React from 'react'
import { Routes, Route } from "react-router-dom";
import Home from '../page/Home'
import Signin from '../page/Signin'
import Navbar from '../components/Navbar'
import QuestionsList from '../components/QuestionsList'
import CoursesPage from '../page/CoursesPage'


const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/questionlist" element={<QuestionsList />} />
        <Route path="/coursecard" element={<CoursesPage />} />
      </Routes>
    </div>
  )
}

export default App

