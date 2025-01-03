// src/App.js
import React from 'react';
import logo from './logo.svg';
import './App.css';
import { TodoList } from './Todolist';
import Counter from './Counter';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h2 className="Text">Welcome back</h2>
        <img src={logo} className="App-logo" alt="logo" />
        <h2 className="gradient-text">Hello, World!</h2>
        <TodoList />
        <Counter />
      </header>
    </div>
  );
}

export default App;
