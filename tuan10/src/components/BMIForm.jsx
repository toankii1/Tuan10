import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateInput, calculateResult } from '../features/bmi/bmiSlice';

const BMIForm = () => {
  const dispatch = useDispatch();
  const { height, weight, result, category } = useSelector(state => state.bmi);

  const handleChange = (e) => {
    dispatch(updateInput({ field: e.target.name, value: e.target.value }));
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">🧮 Câu 8: Tính BMI</h2>
      <div className="space-y-4">
        <input
          type="number"
          name="height"
          value={height}
          onChange={handleChange}
          placeholder="Chiều cao (cm)"
          className="w-full p-2 border rounded"
        />
        <input
          type="number"
          name="weight"
          value={weight}
          onChange={handleChange}
          placeholder="Cân nặng (kg)"
          className="w-full p-2 border rounded"
        />
        <button
          onClick={() => dispatch(calculateResult())}
          className="px-4 py-2 bg-blue-600 text-white rounded"
        >
          Tính BMI
        </button>
      </div>

      {result && (
        <div className="mt-4">
          <p className="text-lg">✅ BMI: <strong>{result}</strong></p>
          <p className="text-lg">📌 Phân loại: <strong>{category}</strong></p>
        </div>
      )}
    </div>
  );
};

export default BMIForm;
