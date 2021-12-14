import React from 'react'

function Filtration({ filterAll, filterCompleted, filterUncompleted }) {
    return(
        <div className='filter'>
            <button  
                className='filter__btn-all'
                onClick={filterAll}
            >All</button>
            <button  
                className='filter__btn-active'
                onClick={filterUncompleted}
            >Active</button>
            <button  
                className='filter__btn-completed'
                onClick={filterCompleted}
            >Completed</button>
        </div>
    )
}

export default Filtration;