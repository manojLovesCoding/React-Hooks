import React, { useState, useCallback } from "react";

function TodoApp() {
  const [todos, setTodos] = useState([
    "Learn React",
    "Build a Project",
    "Master Hooks"
  ]);
  const [newTodo, setNewTodo] = useState("");

  // Memoized function to add a new to-do
  const addTodo = useCallback(() => {
    if (newTodo.trim()) {
      setTodos((prevTodos) => [...prevTodos, newTodo.trim()]);
      setNewTodo("");
    }
  }, [newTodo]);

  return (
    <div className="p-6 bg-gray-100 text-gray-800">
      <h1 className="text-2xl font-bold mb-4">Todo List</h1>
      <input
        type="text"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
        placeholder="Add a new todo"
        className="border rounded px-4 py-2 w-full mb-4"
      />
      <button
        onClick={addTodo}
        className="px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
      >
        Add Todo
      </button>
      <ul className="mt-4">
        {todos.map((todo, index) => (
          <TodoItem key={index} todo={todo} />
        ))}
      </ul>
    </div>
  );
}

// Child component
// eslint-disable-next-line react/display-name
const TodoItem = React.memo(({ todo }) => {
  console.log(`Rendering: ${todo}`);
  return <li className="mb-2">{todo}</li>;
});

export default TodoApp;
