import axios from 'axios'
import { useEffect, useState } from 'react'
import TodoCard from './component/TodoCard'
import { BrowserRouter as BR, Route, Routes } from 'react-router-dom'
import { dividerClasses } from '@mui/material'
import CardCollection from './component/CardCollection'
import CardDetails from './component/CardDetails'
import Home from './component/Home'
import Login from './component/Login'



function App() {
 let [data,setData]=useState([])
 let [loading,setLoading]=useState(false)
 let [error,setError]=useState(false)
 let [errorMessage,setErrorMessage]=useState('')

  useEffect(()=>{
async function  fethcData(){
  setLoading(true)
try{
  let res=await axios.get('https://dummyjson.com/products')
  setData(res.data.products)
  setLoading(false)
  setError(false)
}catch(err){
  console.log(err.message)
  setLoading(false)
  setError(true)
  setErrorMessage(err.message)
}


}

fethcData()
  },[])

  return (
<BR>
<Routes>
<Route path='login' element={<Login/>}/>
<Route path="/" element={<Home/>}>

<Route path='card' element={<CardCollection todo={data} loading={loading} errorMessage={errorMessage} error={error} />}/>
<Route path='card/:id' element={<CardDetails/>}/>
  
</Route>

</Routes>

</BR>
  )
}

export default App
