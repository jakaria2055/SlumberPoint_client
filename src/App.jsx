import React from 'react'
import NavBar from './components/NavbAr'
import {Route, Routes, useLocation} from "react-router-dom"
import Home from './pages/Home'
import Footer from './components/Footer'
import Rooms from './pages/Rooms'
import RoomDetails from './pages/RoomDetails'

function App() {
  const isOwnerPath = useLocation().pathname.includes("owner")
  return (
    <>
     {!isOwnerPath && <NavBar />}
     <div className='min-h-[70vh]'>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/rooms' element={<Rooms />} />
          <Route path='/rooms/:id' element={<RoomDetails />} />
        </Routes>
     </div>
     <Footer />
    </>
  )
}

export default App