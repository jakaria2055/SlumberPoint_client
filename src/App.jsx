import React from 'react'
import NavBar from './components/NavbAr'
import {Route, Routes, useLocation} from "react-router-dom"
import Home from './pages/Home'

function App() {
  const isOwnerPath = useLocation().pathname.includes("owner")
  return (
    <>
     {!isOwnerPath && <NavBar />}
     <div className='min-h-[70vh]'>
        <Routes>
          <Route path='/' element={<Home />}/>
        </Routes>
     </div>
    </>
  )
}

export default App