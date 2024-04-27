import React from 'react'
import TodoCard from './TodoCard'

const CardCollection = ({todo,loading,error,errorMessage}) => {
    // console.log(todo)
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
    return <TodoCard key={item.id} todo={item}/>
})

}

   </section>
  )
}

export default CardCollection