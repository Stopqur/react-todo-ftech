import React, { useState } from 'react';

export default function Form({ createTask }) {
  const [value, setValue] = useState('')

  const changeInput = (e) => {
    setValue(e.target.value)
  } 

  const handleCreateTask = (e) => {
    e.preventDefault()
    if(value === '') return;
    const newTask = {
      'title': value,
      'id': Date.now().toString(),
      typeField: true,
      completed: false
    }
    createTask(newTask)
    setValue('')
  } 

  return (
    <form className='form'>
      <input 
        className='form__input'
        type='text' 
        value={value} 
        onChange={changeInput}
        placeholder='Write...'
      />
      <button onClick={handleCreateTask}>create post</button>
    </form>
  )
}