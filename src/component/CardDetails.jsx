import { ContactsOutlined } from '@mui/icons-material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import RecipeReviewCard from './ItemCard'

 ///localhost:5173/card/singlecard/15
 //1 id parampath/
 //useParam
//  return // object {id:15}
const CardDetails = () => {
  const [singleItem,setSingleItem]=useState({})
let {id}=useParams()
console.log(paramId)
useEffect(()=>{
  async function fetchSingleData(){
try{
let data=await axios.get(`https://dummyjson.com/products/${id}`)

setSingleItem(data.data)
}
catch(err){
  console.log(err)
}


  }
  fetchSingleData()
},[])


  return (
    <section>

     <RecipeReviewCard key={singleItem.id} detailItem={singleItem}/>
    </section>
  )
}

export default CardDetails