import React from 'react'
import Container from './Container'
import NotFound from './NotFound'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

const App = () => {
  return (
    <Router >
      <Routes>
        <Route path="/" element={<Container />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  )
}

export default App
