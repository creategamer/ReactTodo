import React from 'react'
import AddTodo from './addTodo'
import Todos from './Todos'

function AppTodo() {
    return (
        <div className='h-screen '>
            <AddTodo />
            <Todos />
        </div>
    )
}

export default AppTodo
