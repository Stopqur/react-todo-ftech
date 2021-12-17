import React from 'react';
import { connect } from 'react-redux';
import { setInputText } from '../store/form/actions';


const mapStateToProps = (state) => {
    return {
        inputText: state.form.inputText
    } 
}

const mapDispatchToProps = {
    setInput: setInputText
}

function Form( { inputText, setInput, createTask }) {

    const changeInput = (e) => {
        setInput(e.target.value)
    }

    const handleCreateTask = (e) => {
        e.preventDefault()
        if(inputText !== '') {
            const newTask = {
                'title': inputText,
                'id': Date.now().toString(),
                completed: false,
                typeField: true
            }
            createTask(newTask)
            setInput('')
        }
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
            >create post</button>
      </form>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(Form)
