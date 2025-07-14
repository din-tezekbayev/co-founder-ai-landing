import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import CoFounderAI from './CoFounderAI.tsx'
import ThankYouPage from './ThankYouPage.tsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<CoFounderAI />} />
        <Route path="/thank-you" element={<ThankYouPage />} />
      </Routes>
    </Router>
  </React.StrictMode>,
)