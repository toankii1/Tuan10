import React from 'react';
import { useSelector } from 'react-redux';
import Counter from './components/Counter';
import TodoList from './components/TodoList';
import ThemeToggle from './components/ThemeToggle';

function App() {

  const theme = useSelector(state => state.theme);

  return (
    <div className={`${theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-gray-100 text-black'} min-h-screen p-6`}>
      <div className="max-w-2xl mx-auto space-y-12">
        <ThemeToggle />

        <section>
          <h2 className="text-2xl font-bold mb-4">🧩 Câu 1: Counter App</h2>
          <Counter />
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">📋 Câu 2: To-do List</h2>
          <TodoList />
        </section>
      </div>
    </div>
  );
}

export default App;
