import React from 'react'
import AddTask from './AddTask'
import TaskList from './TaskList'

const Main = () => {
    return (
        <div className='main'>
            <AddTask />
            <TaskList />
        </div>
    )
}

export default Main
