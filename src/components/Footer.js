import React from 'react'

const Footer = ({onDeleteAllBtn, taskLeft}) => {
    return (
        <div className='footer'>
            <p> {taskLeft !== 0 ? "Remaining tasks: " + taskLeft : "No Tasks Set"}</p>
            <button className='buttonStyle1' onClick={onDeleteAllBtn}>clear all</button>
        </div>
    )
}

export default Footer
