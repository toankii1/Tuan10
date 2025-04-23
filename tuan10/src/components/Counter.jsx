import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement } from '../features/counter/counterSlice';

const Counter = () => {
  const count = useSelector(state => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div className="text-center flex flex-col items-center gap-6 border border-blue-400 p-4 rounded-xl">
      <h1 className="text-3xl font-bold">Counter App</h1>
      <p className="text-xl">Giá trị: {count}</p>
      <div className="space-x-4">
        <button
          onClick={() => dispatch(increment())}
          className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded"
        >
          Tăng
        </button>
        <button
          onClick={() => dispatch(decrement())}
          className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded"
        >
          Giảm
        </button>
      </div>
    </div>
  );
};

export default Counter;
