import React from 'react';
import './App.css';
import {Todolist} from "./Todolist";

function App() {
    return (
        <div className="App">
          <Todolist title={'What to learn1'}/>
          <Todolist title={'What to learn2'}/>
        </div>
    );
}

export default App;
