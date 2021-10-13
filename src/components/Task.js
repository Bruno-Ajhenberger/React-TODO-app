import React from 'react'


const Task = ({text, onMouseEntered, id, isFocused, onMouseLeft, onDeleteBtn}) => {
    return (
        <div key = {id} className={isFocused ? 'taskFocused' : 'task'} onMouseEnter={() => onMouseEntered(id)} onMouseLeave={() => onMouseLeft(id)}>
                <h5 className='text'>{text}</h5>   
                <div className='default'>
                <button className='buttonStyle2' onClick={() => onDeleteBtn(id)}>Delete</button>      
                </div>
        </div>
    )
}

Task.defaultProps = {
    text : 'Placeholder Text',
    isFocused : false , 
}

export default Task
