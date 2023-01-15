import React from 'react'
import cl from './ToDo.module.css'

const ToDoItem = ({idx, name, isChecked, toggleCheckedTodo}) => {
  return (
    <div className={cl.TodoItem} onClick={() => toggleCheckedTodo(idx)}>
        <input type='checkbox' checked={isChecked}/>
        <span className={cl.ToDoName}>{name}</span>
    </div>
  ) 
}


export default ToDoItem