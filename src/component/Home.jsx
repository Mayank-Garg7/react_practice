import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import ResponsiveAppBar from './Navbar'
import Navbar from './Navbar'

const Home = () => {
    let isLoggedin=false
  return (
    <>

{isLoggedin?<Outlet/>:<Navigate to='/login'/>}


  
    </>
  
  )
}

export default Home