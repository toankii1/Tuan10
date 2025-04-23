import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { addTodo, toggleTodo, removeTodo } from '../features/todos/todoSlice';

const TodoList = () => {
  const [text, setText] = useState('');
  const todos = useSelector(state => state.todos);
  const dispatch = useDispatch();

  const handleAdd = () => {
    if (text.trim()) {
      dispatch(addTodo(text));
      setText('');
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-4 border rounded bg-white shadow">
      <h2 className="text-2xl font-bold mb-4">📋 To-do List</h2>
      <div className="flex gap-2 mb-4">
        <input
          value={text}
          onChange={e => setText(e.target.value)}
          className="flex-1 border px-2 py-1 rounded"
          placeholder="Thêm công việc..."
        />
        <button onClick={handleAdd} className="bg-blue-500 text-white px-4 rounded">
          Thêm
        </button>
      </div>
      <ul className="space-y-2">
        {todos.map(todo => (
          <li
            key={todo.id}
            className="flex items-center justify-between px-2 py-2 border rounded hover:bg-gray-100"
          >
            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => dispatch(toggleTodo(todo.id))}
                className="accent-blue-500 w-5 h-5"
              />
              <span className={todo.completed ? 'line-through text-gray-500' : ''}>
                {todo.text}
              </span>
            </div>
            <button
              onClick={() => dispatch(removeTodo(todo.id))}
              className="text-red-500 hover:text-red-700"
            >
              ❌
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
