import React from 'react'

function Filtration({ setFiltrationAll, setFiltrationDone, setFiltrationUnDone }) {
    return(
        <div className='filter'>
            <button  
                className='filter__btn'
                onClick={setFiltrationAll}
            >All</button>
            <button  
                className='filter__btn'
                onClick={setFiltrationUnDone}
            >Active</button>
            <button  
                className='filter__btn'
                onClick={setFiltrationDone}
            >Completed</button>
        </div>
    )
}

export default Filtration;