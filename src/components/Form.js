import React from 'react';
import { connect } from 'react-redux';
import { setInputText } from '../store/form/actions';
import { setTasks, setFilterTasks } from '../store/tasksList/actions'

const mapStateToProps = (state) => {
  return {
    inputText: state.form.inputText,
  } 
}

const mapDispatchToProps = {
  setInputText: setInputText,
  setTasks,
  setFilterTasks,
}

const Form = ({ inputText, setInputText, setFilterTasks, setTasks }) => {
  let createTask = (newPost) => {
    setTasks(newPost)
    setFilterTasks(newPost)
  }

  const changeInput = (e) => {
    setInputText(e.target.value)
  }

  const handleCreateTask = (e) => {
    e.preventDefault()
    if(inputText === '') return;
    const newTask = {
      title: inputText,
      id: Date.now().toString(),
      completed: false,
      typeField: true
    }
    createTask(newTask)
    setInputText('')
  } 

  return (
    <form className='form'>
      <input 
        className='form__input'
        type='text' 
        value={inputText} 
        onChange={changeInput}
        placeholder='Write...'
      />
      <button 
        className='form__btn'
        onClick={handleCreateTask}
      >create post
      </button>
    </form>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(Form)
