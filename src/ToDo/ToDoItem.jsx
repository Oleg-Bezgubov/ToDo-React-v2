import React from 'react'
import cl from './ToDo.module.css'

const ToDoItem = ({idx, name, isChecked, toggleCheckedTodo, removeItem}) => {
  return (
    <div className={cl.TodoItem} onClick={() => toggleCheckedTodo(idx)}>
        <input type='checkbox' checked={isChecked} readOnly/>
        <span className={cl.ToDoName}>{name}</span>
        <button className={cl.myBtn} onClick={removeItem}> remove</button>
    </div>
  ) 
}


export default ToDoItem