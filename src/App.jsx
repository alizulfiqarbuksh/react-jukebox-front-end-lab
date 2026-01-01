import React from 'react'
import { Route, Routes, Link } from 'react-router'
import Home from './components/Home/Home'

function App() {
  return (
    <div>
      <div>
        <div>
          <Link to='/'>Home</Link> | {' '}
        </div>
        <Routes>
          <Route path='*' element={<Home />} />
        </Routes>
      </div>
    </div>
  )
}

export default App