import React, { useState, useEffect } from 'react'

const AddTask = () => {

  const [formId, setFormId] = useState(null);

  useEffect(() => {
    const lastUsedId = localStorage.getItem('lastFormId');
    setFormId(lastUsedId ? parseInt(lastUsedId, 10) : 0);
  }, [])

  useEffect(() => {
    if (formId !== null) {
      localStorage.setItem('lastFormId', formId);
    }
  }, [formId]);


  const handleSubmit = (e) => {

    setFormId(formId + 1);

    const form = e.target;
    const data = new FormData(form);

    const title = data.get('title');

    const existingKey = Object.keys(localStorage).find(key => {
      const task = JSON.parse(localStorage.getItem(key));
      return task.title === title;
    })



    const newTask = {
      id: formId + 1,
      title: data.get('title'),
      desc: data.get('desc'),
      date: data.get('dueDate')
    }

    if (existingKey) {
      localStorage.setItem(existingKey, JSON.stringify(newTask));
    }
    else {

      localStorage.setItem(formId + 1, JSON.stringify(newTask));
      setFormId(formId + 1);
    }


    form.reset();

  }

  let dateObj = new Date();
  let year = dateObj.getFullYear().toString();
  let month = (dateObj.getMonth() + 1).toString().padStart(2, '0');
  let day = dateObj.getDate().toString().padStart(2, '0');
  let currDate = `${year}-${month}-${day}`;
  console.log(currDate)

  return (
    <div className='addTask'>
      <form action="" onSubmit={handleSubmit}>
        <input type="text" name='title' placeholder='Enter Task Title' required />
        <textarea name='desc' placeholder='Enter Description' required />

        <div className="dueDate">
          <label htmlFor="dueDate">Due Date:</label>
          <input type="date" id='dueDate' name='dueDate' required min={currDate} max="2030-12-31" />
        </div>

        <button type="submit">Add Task</button>
      </form>
    </div>
  )
}

export default AddTask
