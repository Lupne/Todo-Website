import React from 'react';

export default function Todos({todos,deletetodo}){
  const todolist = todos.length?(
    todos.map((todo)=>{
      return(
        <div className="collection-item">
        <span onClick={()=>{deletetodo(todo.id)}}>{todo.content}</span>
        </div>
      )
    })
  ):(
    <p className='center'>No Todo's left!</p>
  )
  return(
    <div className="todo collection">
    {todolist}
    </div>
  )
}
