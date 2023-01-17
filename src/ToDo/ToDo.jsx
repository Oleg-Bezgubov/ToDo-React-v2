import React, { useState, useEffect } from 'react'
import ToDoItem from './ToDoItem'
import cl from './ToDo.module.css'


const ToDo = () => {
    const [name, setName] = useState('')
    const [todos, setTodos] = useState([{
        _id: 0,
        name: 'Купить макбук',
        isChecked: true
    }])

    
    useEffect(()=> {
        localStorage.setItem('todos', JSON.stringify(todos))
    }, [todos])


    useEffect(()=> {
        const raw = localStorage.getItem('todos')
        setTodos(JSON.parse(raw)) //не работает
    }, [])





    const onKeyPressNameHandler = e => {
        if(e.key === 'Enter'){
            e.preventDefault();
            setTodos(prev => [...prev, { _id: todos.length, name: name, isChecked: false}])    
            setName('')    
        }
    }

    const toggleCheckedTodo = idx => {
        const newArray = [].concat(todos)
        newArray[idx].isChecked = !newArray[idx].isChecked
        setTodos(newArray)
    }

    return (
        <>
            <h1> ToDo приложение</h1>
          {todos && todos.map((todo, idx) =>
            <ToDoItem 
            key={`_todo_${todo._id}`} 
            idx={idx}
            name={todo.name} 
            isChecked={todo.isChecked}
            toggleCheckedTodo={toggleCheckedTodo} 
            />)}

            <input type='text'
                value={name}
                onChange={e => setName(e.target.value)}
                onKeyPress={onKeyPressNameHandler}
                placeholder='New task...' />
            <h3>написано мной любимым</h3>
        </>

    )
}


export default ToDo