import React from 'react'
import Footer from './components/Footer'
import Home from './pages/Home'
import {Routes,Route} from 'react-router-dom'
import Appointment from './pages/Appointment'
import Login from './pages/Login'
import Doctors from './pages/Doctors'
import Navbar from './components/Navbar'
import About from './pages/About'
import Contact from './pages/Contact'
import MyProfile from './pages/Myprofile'
import Myappointments from './pages/Myappointments'
const App = () => {
  return (
<div className='mx-4 sm:mx-[10%]'>
<Navbar />
  <Routes>
<Route path='/' element={<Home />} />
<Route path='/doctors' element={<Doctors />} />
<Route path='/doctors/:speciality' element=
{<Doctors />} />
<Route path='/login' element=
{<Login />} />
<Route path='/about' element=
{<About />} />
<Route path='/contact' element=
{<Contact />} />
<Route path='/login' element=
{<Login />} />
<Route path='/my-profile' element=
{<MyProfile/>} />
<Route path='/my-appointments' element=
{<Myappointments />} />
<Route path='/appointment/:docId' element=
{<Appointment />} />

  </Routes>
  <Footer />
</div>
    
    
  )
}

export default App
