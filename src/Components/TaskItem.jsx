import React from 'react'

const TaskItem = ({ value }) => {

  const handleDeleteOperation = () => {

    if (localStorage.length === 2 || localStorage.length === 1) {
      localStorage.clear();
    }
    else {
      localStorage.removeItem(value.id);
    }

    window.location.reload();
  }

  value.date = value.date.split('-').reverse().join('-');

  return (
    <>

      <li>
        <h2>Task Details</h2>
        <p><strong>Title:</strong> {value.title}</p>
        <p><strong>Description:</strong> {value.desc}</p>
        <p><strong>Due Date:</strong> {value.date}</p>
        <button onClick={handleDeleteOperation}>Delete</button>
      </li >

    </>

  )
}

export default TaskItem
