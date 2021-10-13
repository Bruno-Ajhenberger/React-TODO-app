import React from 'react'
import Header from './components/Header'
import Task from './components/Task'
import Footer from './components/Footer'
import { useState } from 'react'
import { useEffect } from 'react'

const App = () => {

const [tasks, setTasks] =  useState([{}])
const [inputText, setInputText] = useState("");
const [category, setCategory] = useState(["School", "Work", "SideProjects"]);



const onInputChange = (text) =>{
  setInputText(text);
}

const onMouseEntered = (id) =>{
  console.log("entered", id);
    setTasks(tasks.map((task) => task.id === id ? {...task, isFocused : true} : task));
}
const onMouseLeft = (id) =>{
  setTasks(tasks.map((task) => task.id === id ? {...task, isFocused : false} : task));
}
const onDeleteTask = async (id) => {
  setTasks(tasks.filter((task) => task.id !== id ));
}
const onDeleteAll = () => {
  console.log("delete all")
  setTasks([])
}

const onAddCategory = (newCategory) =>{
  setCategory([...category, newCategory]);
}


const onAddBtn = (task, category) => {
  console.log("add",category)
  const newTask = {
    id:tasks.length +1,
    text: task,
    category : category,
    isFocused: false,
    isImportant : false
  }
  setTasks([...tasks,newTask])

}
const onUpdateBtn =  (id, inputText) => {
  console.log( id, "  ", inputText)
  setTasks(tasks.map(task => task.id === id ? {...tasks, text : inputText} : task))
}

  return (
    <div className='mainapp'>
        <Header onAddBtn={onAddBtn} onInputChange={onInputChange} categories={category} onAddCategory={onAddCategory}/>
        <div className='taskBox'>
          {
            category.map( (category1) => (
              <div >
                <p>{category1}</p>
                <div>
                {tasks.map((task, index) => (task.category === category1? <Task key = {index} text={task.text} id={task.id} onMouseEntered={onMouseEntered} 
                isFocused={task.isFocused} onMouseLeft={onMouseLeft} onDeleteBtn={onDeleteTask} onUpdateBtn={onUpdateBtn}/> : null))}
                </div>
              </div>)       
            )
          }
        </div>
        <Footer onDeleteAllBtn={onDeleteAll} taskLeft={tasks.length}/>
    </div>
  )
}

export default App
