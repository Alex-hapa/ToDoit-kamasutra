import React, {ChangeEvent, KeyboardEvent, MouseEventHandler, useState} from 'react';
import {FilterValuesType} from './App';
import {Button} from './components/Button';

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

    // const changeFilterAllHandler = () => {
    //     props.changeFilter('all')
    // }
    //
    // const changeFilterActiveHandler = () => {
    //     props.changeFilter('active')
    // }
    //
    // const changeFilterCompletedHandler = () => {
    //     props.changeFilter('completed')
    // }

    const tsarChangeFilterHandler = (filterValue: FilterValuesType) => {
        props.changeFilter(filterValue)
    }

    const removeTaskHandler = (tId: string) => {
        props.removeTask(tId)
    }

    return <div>
        <h3>{props.title}</h3>
        <div>
            <input
                value={newTitle}
                onChange={onChangeHandler}
                onKeyDown={onKeyDownHandler}
            />
            <Button name={'+'} callBack={addTaskHandler}/>
            {/*<button onClick={addTaskHandler}>+</button>*/}
            {/*<button onClick={() => {*/}
            {/*    props.addTask(newTitle)*/}
            {/*    setNewTitle('')*/}
            {/*}*/}
            {/*}>+</button>*/}
        </div>
        <ul>
            {
                props.tasks.map(t => {
                        // const removeTaskHandler = () => {
                        //     props.removeTask(t.id)
                        // }
                        return (
                            <li key={t.id}>
                                <input type="checkbox" checked={t.isDone}/>
                                <span>{t.title}</span>
                                {/*<button onClick={() => removeTaskHandler(t.id)}>x</button>*/}
                                <Button name={'x'} callBack={() => removeTaskHandler(t.id)}/>
                            </li>
                        )
                    }
                )
            }
        </ul>
        <div>
            <Button name={'All'} callBack={() => tsarChangeFilterHandler('all')}/>
            {/*<button onClick={() => tsarChangeFilterHandler('all')}>All</button>*/}
            <button onClick={() => tsarChangeFilterHandler('active')}>Active</button>
            <button onClick={() => tsarChangeFilterHandler('completed')}>Completed</button>
        </div>
    </div>
}
