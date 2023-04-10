import React, {ChangeEvent, KeyboardEvent, useState} from 'react';
import {FilterValuesType} from './App';

type TaskType = {
    id: string
    title: string
    isDone: boolean
}

type PropsType = {
    title: string
    tasks: Array<TaskType>
    removeTask: (taskId: string) => void
    changeFilter: (value: FilterValuesType) => void
    addTask: (newTitle: string) => void
}

export function Todolist(props: PropsType) {

    const [newTitle, setNewTitle] = useState('');

    const addTaskHandler = () => {
        props.addTask(newTitle)
        setNewTitle('')
    }

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setNewTitle(e.currentTarget.value)
    }

    const onKeyDownHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            addTaskHandler()
        }
    }

    return <div>
        <h3>{props.title}</h3>
        <div>
            <input
                value={newTitle}
                onChange={onChangeHandler}
                onKeyDown={onKeyDownHandler}
            />
            <button onClick={addTaskHandler}>+</button>
            {/*<button onClick={() => {*/}
            {/*    props.addTask(newTitle)*/}
            {/*    setNewTitle('')*/}
            {/*}*/}
            {/*}>+</button>*/}
        </div>
        <ul>
            {
                props.tasks.map(t => <li key={t.id}>
                    <input type="checkbox" checked={t.isDone}/>
                    <span>{t.title}</span>
                    <button onClick={() => {
                        props.removeTask(t.id)
                    }}>x
                    </button>
                </li>)
            }
        </ul>
        <div>
            <button onClick={() => {
                props.changeFilter('all')
            }}>
                All
            </button>
            <button onClick={() => {
                props.changeFilter('active')
            }}>
                Active
            </button>
            <button onClick={() => {
                props.changeFilter('completed')
            }}>
                Completed
            </button>
        </div>
    </div>
}
