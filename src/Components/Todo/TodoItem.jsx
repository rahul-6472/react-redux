import React, {useEffect} from 'react'
import {useParams} from "react-router-dom"
import {useDispatch} from "react-redux"

import { toggleTodo,removeTodo } from '../../Redux/Action'

const TodoItem = () => {
    const {id} = useParams()
    const [todoItem,setTodoItem] = React.useState({})

    const dispatch = useDispatch()


    useEffect(()=>{
       fetch (`http://localhost:5000/todos/${id}`)
       .then((res) => (res.json()))
       .then ((res) =>setTodoItem(res))
    },[id])

   
  return (
    <div>
       {
           <>{todoItem.title} {"--->"} {todoItem.status ? "completed" : "not-completed"} <button onClick = {() => dispatch(toggleTodo(todoItem.id))}>Toggle status</button> <button onClick = {() => dispatch(removeTodo(todoItem.id))} >Remove</button></>
       }
    </div>
  )
}

export default TodoItem
