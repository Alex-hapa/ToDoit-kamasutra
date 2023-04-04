import React from 'react';
import './App.css';
import {Todolist} from "./Todolist";

function App() {
    const forTitle1 = 'What to learn1'
    const forTitle2 = 'What to learn2'

    const tasks1 = [
        {id: 1, title: 'HTML&CSS', isDone: true},
        {id: 2, title: 'JS', isDone: true},
        {id: 3, title: 'ReactJS', isDone: false},
        {id: 4, title: 'ReactJS', isDone: false}
    ]

    const tasks2 = [
        {id: 5, title: 'Hello World', isDone: true},
        {id: 6, title: 'I am Happy', isDone: false},
        {id: 7, title: 'Yo', isDone: false}
    ]

    return (

        <div className="App">
            <Todolist title={forTitle1} title2={123} tasks={tasks1}/>
            <Todolist title={forTitle2} tasks={tasks2}/>
        </div>
    );
}

export default App;
