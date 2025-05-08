import { useState } from 'react';

const Todo = () => {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState('');

  const addTask = () => {
    if (input.trim()) {
      setTasks([...tasks, { id: Date.now(), text: input, completed: false }]);
      setInput('');
    }
  };

  const toggleComplete = (id) => {
    setTasks(tasks.map(task => task.id === id ? { ...task, completed: !task.completed } : task));
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  return (
    <div className='min-h-screen bg-gray-100 flex items-center justify-center'>
      <div className='w-full max-w-md p-4 bg-white rounded-lg shadow-md'>
        <h1 className='text-2xl font-bold mb-4'>To-Do App</h1>
        <input
          className='w-full p-2 border rounded mb-2'
          placeholder='Add a new task...'
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button className='w-full p-2 bg-blue-500 text-white rounded mb-4' onClick={addTask}>
          Add Task
        </button>
        <ul>
          {tasks.map(task => (
            <li
              key={task.id}
              className={`p-2 border-b flex justify-between ${task.completed ? 'line-through text-gray-500' : ''}`}
            >
              {task.text}
              <div>
                <button className='mx-2 text-green-500' onClick={() => toggleComplete(task.id)}>
                  ✓
                </button>
                <button className='text-red-500' onClick={() => deleteTask(task.id)}>
                  ✕
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Todo;