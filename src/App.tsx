import React, {useState} from 'react';
import './App.css';
import {Todolist} from './Todolist';

// export type filterButtonKeyType = 'All' | 'Active' | 'Completed';

function App() {

    // let tasks = [
    //     {id: 1, title: 'HTML&CSS', isDone: true},
    //     {id: 2, title: 'JS', isDone: true},
    //     {id: 3, title: 'ReactJS', isDone: false}
    // ]

    let [tasks, setTasks] = useState([
        {id: 1, title: 'HTML&CSS', isDone: true},
        {id: 2, title: 'JS', isDone: true},
        {id: 3, title: 'ReactJS', isDone: false},
        {id: 4, title: 'Redux', isDone: false},
    ])

    const removeTask = (taskId: number) => {
        // tasks = tasks.filter(el => el.id !== taskId)
        // setTasks(tasks)
        setTasks(tasks.filter(el => el.id !== taskId))
    }

    // let [filterButtonKey, setFilterButtonKey] = useState<filterButtonKeyType>('All')
    // let filteredTasks = tasks
    // if (filterButtonKey === 'Active') {
    //     filteredTasks = tasks.filter(el => !el.isDone)
    // }
    // if (filterButtonKey === 'Completed') {
    //     filteredTasks = tasks.filter(el => el.isDone)
    // }
    //
    // const tasksFilter = (filter: filterButtonKeyType) => {
    //     setFilterButtonKey(filter);
    // }

    return (
        <div className="App">
            <Todolist title="What to learn"
                      tasks={tasks}//filteredTasks
                      removeTask={removeTask}
                      // tasksFilter={tasksFilter}
            />
        </div>
    );
}

export default App;
