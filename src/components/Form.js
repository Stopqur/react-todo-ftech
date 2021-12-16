import React, { useState } from 'react';

export default function Form({ createTask }) {
    const [value, setValue] = useState('')

    function changeInput(e) {
        setValue(e.target.value)
      } 

    function handleCreateTask(e) {
        e.preventDefault()
        if(value !== '') {
            const newTask = {
                'title': value,
                'id': Date.now().toString(),
                completed: false
            }
            createTask(newTask)
            setValue('')
            console.log('eok')
        } else {
            console.log('else')

        }
        
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