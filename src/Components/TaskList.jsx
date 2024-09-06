import React, { useEffect, useState } from 'react'
import TaskItem from './TaskItem'


const TaskList = () => {

  const [listItems, setListItems] = useState([]);

  useEffect(() => {
    let totalItems = [];

    if (localStorage.length === 1 || localStorage.length === 0) {
      document.querySelector('.taskList ul').style.background = 'none';
    }

    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      if (key && key !== 'lastFormId') {

        const value = localStorage.getItem(key);

        totalItems.push({ key, value: JSON.parse(value) })
      }
    }
    totalItems.sort((a, b) => a.key.localeCompare(b.key));

    setListItems(totalItems);
  }, [])


  return (
    <div className='taskList'>
      <ul>
        {
          listItems.map(item => (
            <TaskItem key={item.key} value={item.value} />
          ))
        }
      </ul>
    </div>
  )
}

export default TaskList
