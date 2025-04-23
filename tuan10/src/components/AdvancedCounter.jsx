import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, incrementByAmount, reset } from '../features/counter/counterSlice';

const AdvancedCounter = () => {
  const count = useSelector(state => state.counter.value);
  const dispatch = useDispatch();
  const [step, setStep] = useState(1);

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">🧠 Câu 7: Counter Nâng Cao</h2>
      <p className="text-lg mb-4">Giá trị hiện tại: <strong>{count}</strong></p>

      <div className="flex items-center space-x-2 mb-4">
        <button
          onClick={() => dispatch(increment())}
          className="px-4 py-2 bg-blue-600 text-white rounded"
        >
          +1
        </button>

        <input
          type="number"
          className="w-20 p-2 border rounded"
          value={step}
          onChange={(e) => setStep(Number(e.target.value))}
        />

        <button
          onClick={() => dispatch(incrementByAmount(step))}
          className="px-4 py-2 bg-green-600 text-white rounded"
        >
          + Theo số
        </button>

        <button
          onClick={() => dispatch(reset())}
          className="px-4 py-2 bg-gray-500 text-white rounded"
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default AdvancedCounter;
