import React from 'react';
import Counter from './components/Counter';
import TodoList from './components/TodoList';

function App() {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-2xl mx-auto space-y-12">
        <section id="counter">
          <h2 className="text-2xl font-bold mb-4">Câu 1: Counter App</h2>
          <Counter />
        </section>

        <section id="todo">
          <h2 className="text-2xl font-bold mb-4">Câu 2: To-do List</h2>
          <TodoList />
        </section>
      </div>
    </div>
  );
}

export default App;
