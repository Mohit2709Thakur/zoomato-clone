import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Home from './Pages/Home'
import Success from './Pages/Success'
import Error from './Pages/Error'
import ProtectedRoute from './Components/ProtectedRoute'
import Footer from './Components/Footer'

const App = () => {
  return (
   <>
   <BrowserRouter>
   <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/success" element={<ProtectedRoute element={<Success/>} />} />
    <Route path="/*" element={<Error />} />


   </Routes>
   </BrowserRouter>

   </>
  )
}

export default App