import React from 'react'
import TodoCard from './TodoCard'
import { useNavigate} from 'react-router-dom'



const CardCollection = ({todo,loading,error,errorMessage}) => {
    let navigate=useNavigate()
 
if(loading){
    return <h1>loadding.......</h1>
}
if(error){
    return <h1>
        {errorMessage}
    </h1>
}
  return (
   <section className="card-container">

{
todo.map((item)=>{
    return <TodoCard onClick={()=>handleClick(item.id)}  key={item.id} todo={item}/>
})

}

   </section>
  )
}

export default CardCollection