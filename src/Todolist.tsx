import React, {useState} from 'react';
// import {filterButtonKeyType} from './App';

type filterButtonKeyType = 'All' | 'Active' | 'Completed';//ddd

type TaskType = {
    id: number
    title: string
    isDone: boolean
}

type PropsType = {
    title: string
    tasks: Array<TaskType>
    removeTask: (taskId: number) => void
    // tasksFilter: (filter: filterButtonKeyType) => void
}

export function Todolist(props: PropsType) {
    let [filterButtonKey, setFilterButtonKey] = useState<filterButtonKeyType>('All')
    let filteredTasks = props.tasks
    if (filterButtonKey === 'Active') {
        filteredTasks = props.tasks.filter(el => !el.isDone)
    }
    if (filterButtonKey === 'Completed') {
        filteredTasks = props.tasks.filter(el => el.isDone)
    }

    const tasksFilter = (filter: filterButtonKeyType) => {
        setFilterButtonKey(filter);
    }
    return (
        <div>
            <h3>{props.title}</h3>
            <div>
                <input/>
                <button>+</button>
            </div>
            <ul>
                {filteredTasks.map((el) => {//props.tasks
                    return (<li key={el.id}>
                        <input type="checkbox" checked={el.isDone}/>
                        <span>{el.title}</span>
                        <button onClick={() => {props.removeTask(el.id)}}>X</button>
                    </li>);
                })}
            </ul>
            <div>
                <button onClick={() => tasksFilter('All')}>All</button>//props.tasksFilter
                <button onClick={() => tasksFilter('Active')}>Active</button>//props.tasksFilter
                <button onClick={() => tasksFilter('Completed')}>Completed</button>//props.tasksFilter
            </div>
        </div>
    );
}
