import React from 'react'
import { connect } from 'react-redux'

import {
  setFiltrationAll, 
  setFiltrationDone, 
  setFiltrationUnDone 
} from '../store/tasksList/actions'

const mapStateToProps = (state) => {
  return {
    tasks: state.tasks,
    filterTasks: state.filterTasks
  }
}

const mapDispatchToProps = {
  setFiltrationAll,
  setFiltrationDone,
  setFiltrationUnDone,
}


const Filtration = ({ setFiltrationAll, setFiltrationDone, setFiltrationUnDone }) => {
  return(
    <div className='filter'>
      <button  
        className='filter__btn'
        onClick={setFiltrationAll}
      >All
      </button>
      <button  
        className='filter__btn'
        onClick={setFiltrationUnDone}
      >Active
      </button>
      <button  
        className='filter__btn'
        onClick={setFiltrationDone}
      >Completed
      </button>
    </div>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(Filtration);