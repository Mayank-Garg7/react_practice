import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import ResponsiveAppBar from './Navbar'
import Navbar from './Navbar'

const PrivateRoute = () => {
    let isLoggedin=true
  return (
    <>
<h2>this is private route</h2>
{isLoggedin?<Outlet/>:<Navigate to='/login'/>}
{/* <Outlet/> */}


  
    </>
  
  )
}

export default PrivateRoute