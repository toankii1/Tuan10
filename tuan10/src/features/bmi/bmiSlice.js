import { createSlice } from '@reduxjs/toolkit';

const bmiSlice = createSlice({
  name: 'bmi',
  initialState: {
    height: '',
    weight: '',
    result: null,
    category: '',
  },
  reducers: {
    updateInput: (state, action) => {
      const { field, value } = action.payload;
      state[field] = value;
    },
    calculateResult: (state) => {
      const heightInM = parseFloat(state.height) / 100;
      const weight = parseFloat(state.weight);
      if (heightInM > 0 && weight > 0) {
        const bmi = weight / (heightInM * heightInM);
        state.result = bmi.toFixed(2);

        if (bmi < 18.5) state.category = 'Gầy';
        else if (bmi < 25) state.category = 'Bình thường';
        else if (bmi < 30) state.category = 'Thừa cân';
        else state.category = 'Béo phì';
      } else {
        state.result = null;
        state.category = '';
      }
    },
  },
});

export const { updateInput, calculateResult } = bmiSlice.actions;
export default bmiSlice.reducer;
