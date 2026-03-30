import React from 'react'

import Navbar from './Navbar'
import { add, subtract } from './components/math'
import './App.css'
const App = () => {
  return (
    <><Navbar />
    <div>this is a simple React app</div>
    <div>2 + 3 = {add(2, 3)}</div>
    <div>5 - 2 = {subtract(5, 2)}</div>
    </>
  )
}

export default App  


