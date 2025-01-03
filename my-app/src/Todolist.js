// src/Todolist.js
import React from 'react';
import useTodoStore from './store';
import './Todolist.css';

export const TodoList = () => {
  const todos = useTodoStore((state) => state.todos);
  const addTodo = useTodoStore((state) => state.addTodo);
  const toggleTodo = useTodoStore((state) => state.toggleTodo);
  const removeTodo = useTodoStore((state) => state.removeTodo);
  const clearCompleted = useTodoStore((state) => state.clearCompleted);

  return (
    <div className="todo-container">
      <h2 className="title">Список ваших дел:</h2>
      <ul className="todo-list">
        {todos.map((todo, index) => (
          <li
            key={index}
            className="todo-item"
            onClick={() => toggleTodo(index)}
            style={{
              textDecoration: todo.completed ? 'line-through' : 'none',
              color: todo.color,
              borderColor: todo.color,
            }}
          >
            {todo.text}
            <button onClick={(e) => {
              e.stopPropagation();
              removeTodo(index);
            }}>Удалить</button>
          </li>
        ))}
      </ul>
      <form
        className="todo-form"
        onSubmit={(e) => {
          e.preventDefault();
          const todoText = e.target.elements.todo.value;
          addTodo(todoText);
          e.target.reset();
        }}
      >
        <input type="text" name="todo" placeholder="Добавить дело" className="todo-input" />
        <button type="submit" className="todo-button">Добавить</button>
      </form>
      <button onClick={clearCompleted} className="todo-button">Очистить выполненные</button>
    </div>
  );
};
