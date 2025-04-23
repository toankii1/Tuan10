import React from 'react';
import { useSelector } from 'react-redux';
import Counter from './components/Counter';
import TodoList from './components/TodoList';
import ThemeToggle from './components/ThemeToggle';
import ShoppingCart from './components/ShoppingCart';
import Auth from './components/Auth';
import UserList from './components/UserList';
import AdvancedCounter from './components/AdvancedCounter';
import BMIForm from './components/BMIForm';
import EventManager from './components/EventManager';

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

        <section>
          <h2 className="text-2xl font-bold mb-4">🎯 Câu 4: Giỏ Hàng</h2>
          <ShoppingCart />
        </section>

        <section>
          <Auth />
        </section>

        <section>
          <UserList />
        </section>

        <section>
          <AdvancedCounter />
        </section>

        <section>
          <BMIForm />
        </section>

        <section>
          <EventManager />
        </section>
      </div>
    </div>
  );
}

export default App;
