import { createSlice, nanoid } from '@reduxjs/toolkit';

const eventSlice = createSlice({
  name: 'events',
  initialState: {
    events: [],
  },
  reducers: {
    addEvent: (state, action) => {
      const newEvent = { id: nanoid(), ...action.payload };
      state.events.push(newEvent);
    },
    editEvent: (state, action) => {
      const { id, updatedEvent } = action.payload;
      const index = state.events.findIndex(e => e.id === id);
      if (index !== -1) {
        state.events[index] = { ...state.events[index], ...updatedEvent };
      }
    },
    deleteEvent: (state, action) => {
      state.events = state.events.filter(e => e.id !== action.payload);
    },
  },
});

export const { addEvent, editEvent, deleteEvent } = eventSlice.actions;
export default eventSlice.reducer;
