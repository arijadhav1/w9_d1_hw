import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// internal
import { Home, Dashboard, SignIn} from './components/index';
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path='/' element={<Home title={'Car Inventory'}/>} />
        <Route path='/dashboard' element={<Dashboard />} /> 
        <Route path='/signin' element={<SignIn />} /> 
      </Routes>
    </Router>
  </React.StrictMode>,
)
