import React from 'react'
import {v4 as uuid} from "uuid"
import {useDispatch} from "react-redux"
import {addTodo} from "../../Redux/Action"

const TdodoInput = () => {

    const [inputValue, setInputValue] = React.useState("")
    const dispatch  = useDispatch()

    const handleAdd =  () =>{
        const payload = {
            title:inputValue,
            status:false,
            id:uuid()
        }

        fetch(`http://localhost:5000/todos`, {
            method:"POST",
            body:JSON.stringify(payload),
            headers:{
                "content-type":"application/json"
            }
        })
        .then((res) => (res.json()))
        .then ((res) => (dispatch(addTodo(res))))
    }

  return (
    <div>
      <input type = "text" value = {inputValue} placeholder = "enter task" onChange = {(e)=>setInputValue(e.target.value)}/>
      <button onClick = {handleAdd}>Add Todo</button>
    </div>
  )
}

export default TdodoInput
