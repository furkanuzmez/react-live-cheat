import React, { useState } from 'react';

const TodoListComponent = ({ live }) => {
  const [task, setTask] = useState('');
  const [todos, setTodos] = useState([]);

  // Add task to the list
  const addTask = () => {
    if (task.trim()) {
      setTodos([...todos, task]);
      setTask(''); // Clear the input field after adding
    }
  };

  // Remove task from the list
  const removeTask = (index) => {
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
  };

  const componentCode = `
import React, { useState } from 'react';

const TodoListComponent = () => {
  const [task, setTask] = useState('');
  const [todos, setTodos] = useState([]);

  const addTask = () => {
    if (task.trim()) {
      setTodos([...todos, task]);
      setTask('');
    }
  };

  const removeTask = (index) => {
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
  };

  return (
    <div>
      <h2>Todo List</h2>
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Enter a new task"
      />
      <button onClick={addTask}>Add Task</button>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            {todo} <button onClick={() => removeTask(index)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoListComponent;
`;

  if (live) {
    return (
      <div>
        <h2>Todo List</h2>
        <input
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder="Enter a new task"
        />
        <button onClick={addTask}>Add Task</button>
        <ul>
          {todos.map((todo, index) => (
            <li key={index}>
              {todo} <button onClick={() => removeTask(index)}>Remove</button>
            </li>
          ))}
        </ul>
      </div>
    );
  }

  // Show component code if live is false
  return <pre>{componentCode}</pre>;
};

export default TodoListComponent;
