import React from 'react';
// import AddTodo from './addTodo'
import AddTodo from './AddTodo.jsx';
import Todos from './Todos.jsx'

function AppTodo() {
    return (
        <div className='h-screen '>
            <AddTodo />
            <Todos />
        </div>
    )
}

export default AppTodo
