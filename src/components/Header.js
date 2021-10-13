import React from 'react'
import { useState } from 'react'

const Header = ({onAddBtn,onInputChange, categories, onAddCategory}) => {
    const [task , setTask] = useState('');
    const [category, setCategory] = useState(categories[0]);


    return (
        <div>
            <div>
                <h2>Todo App</h2>
            </div>
            <div className='header'>
                <input value = {task} onChange={(e) => {setTask(e.target.value); onInputChange(task)}}></input>
                <select onChange={(event) => setCategory(event.target.value)}>
                    {
                        categories.map((category,index) =>(<option key={index} value={category}>{category}</option>))
                    }
                </select>
                <button className='buttonStyle1' onClick={() => {onAddBtn(task,category); setTask(''); onInputChange("")} }>Add Task</button>
                <button className='buttonStyle1' onClick={() => {onAddCategory(task)}}>Add Category</button>
            </div>
        </div>
    )
}

export default Header

