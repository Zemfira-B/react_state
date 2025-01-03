// src/store.js
import { create } from 'zustand';

const useTodoStore = create((set) => ({
  todos: [],
  completedCount: 0,
  addTodo: (todoText) => set((state) => {
    const newTodo = {
      text: todoText,
      completed: false,
      color: vibrantColors[state.todos.length % vibrantColors.length],
    };
    return { todos: [...state.todos, newTodo] };
  }),
  toggleTodo: (index) => set((state) => {
    if (index >= 0 && index < state.todos.length) {
      const updatedTodos = [...state.todos];
      updatedTodos[index].completed = !updatedTodos[index].completed;
      const completedCount = updatedTodos.filter(todo => todo.completed).length;
      return { todos: updatedTodos, completedCount };
    }
    return { todos: state.todos, completedCount: state.completedCount }; // Возвращаем текущее состояние, если индекс некорректен
  }),
  removeTodo: (index) => set((state) => {
    if (index >= 0 && index < state.todos.length) {
      const updatedTodos = [...state.todos];
      updatedTodos.splice(index, 1);
      const completedCount = updatedTodos.filter(todo => todo.completed).length;
      return { todos: updatedTodos, completedCount };
    }
    return { todos: state.todos, completedCount: state.completedCount }; // Возвращаем текущее состояние, если индекс некорректен
  }),
  clearCompleted: () => set((state) => {
    const updatedTodos = state.todos.filter(todo => !todo.completed);
    return { todos: updatedTodos, completedCount: 0 };
  }),
}));

const vibrantColors = [
  '#ff69b4',
  '#8a2be2',
  '#ff1493',
  '#800080',
  '#ff4500',
  '#ff77a8',
  '#00ced1',
  '#ffb3de',
  '#7b68ee',
];

export default useTodoStore;
