// src/Counter.js
import React from 'react';
import useTodoStore from './store';
import './Todolist.css';

const CompletedCounter = () => {
  const completedCount = useTodoStore((state) => state.completedCount);

  return (
    <div className="completed-counter">
      <h2>Выполненные задачи: {completedCount}</h2>
    </div>
  );
}; 

export default CompletedCounter;
