import React from 'react'
import { BrowserRouter,Route, Routes } from 'react-router-dom'
import Challenges from './Components/Challenges'
import Explore from './Components/Explore'
import HireTalents from './Components/HireTalents'
import Navbar from './Components/Navbar'
import HomeCurd from './CURD/HomeCurd'
import Users from './CURD/Users'
import CreateUsers from './CURD/CreateUsers'
import Edit from './CURD/Edit'
const App = () => {
  return (
    <div>   
      <BrowserRouter>
      <HomeCurd/>
      <Routes>
        <Route path='/' element={<Users/>}></Route>
        <Route path='/user' element={<CreateUsers/>}></Route>
        <Route path='/edit/:index' element={<Edit/>}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App