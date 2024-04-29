import React from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {
    let navigate=useNavigate()
const hadnleLogin=()=>{
    navigate('/login')
}

  return (
    <div>Home
    <button onClick={hadnleLogin}>go to login</button>
    </div>
  )
}

export default Home