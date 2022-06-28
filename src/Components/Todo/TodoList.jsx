import React from 'react'
import {Link} from "react-router-dom"
const TodoList = () => {

    const [todos,setTodos] = React.useState([])
    React.useEffect(()=>{

        fetch('http://localhost:5000/todos')
        .then ((res) => (res.json()))
        .then ((res)=> setTodos(res))
    },[todos])

  return (
    <div>
      {
        todos.map((todo) => (<p key = {todo.id}><Link to = {`/todoList/${todo.id}`}>{todo.title}</Link></p>))
      }
    </div>
  )
}

export default TodoList
