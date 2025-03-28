import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Homepage from './pages/Homepage'
import Registration from './pages/Registration'
import Userlist from './components/Userlist'
const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Homepage/>}/>
      <Route path='/registration' element={<Registration/>}/>
      <Route path='/userlist' element={<Userlist/>}/>
    </Routes>
  )
}

export default App