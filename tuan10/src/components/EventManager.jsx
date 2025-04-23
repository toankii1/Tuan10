import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addEvent, editEvent, deleteEvent } from '../features/event/eventSlice';

const EventManager = () => {
  const dispatch = useDispatch();
  const events = useSelector(state => state.events.events);

  const [form, setForm] = useState({ title: '', date: '', description: '' });
  const [editingId, setEditingId] = useState(null);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    if (editingId) {
      dispatch(editEvent({ id: editingId, updatedEvent: form }));
      setEditingId(null);
    } else {
      dispatch(addEvent(form));
    }
    setForm({ title: '', date: '', description: '' });
  };

  const handleEdit = (event) => {
    setForm({ title: event.title, date: event.date, description: event.description });
    setEditingId(event.id);
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">📅 Câu 9: Quản lý Sự kiện</h2>

      <div className="space-y-4 mb-6">
        <input
          name="title"
          placeholder="Tiêu đề"
          value={form.title}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />
        <input
          name="date"
          type="date"
          value={form.date}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />
        <textarea
          name="description"
          placeholder="Mô tả"
          value={form.description}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />
        <button
          onClick={handleSubmit}
          className="px-4 py-2 bg-blue-600 text-white rounded"
        >
          {editingId ? 'Cập nhật' : 'Thêm sự kiện'}
        </button>
      </div>

      <ul className="space-y-4">
        {events.map(event => (
          <li key={event.id} className="p-4 border rounded bg-white shadow">
            <div className="flex justify-between items-center">
              <div>
                <h3 className="text-xl font-semibold">{event.title}</h3>
                <p className="text-sm text-gray-500">{event.date}</p>
                <p>{event.description}</p>
              </div>
              <div className="space-x-2">
                <button
                  onClick={() => handleEdit(event)}
                  className="px-3 py-1 bg-yellow-400 text-white rounded"
                >
                  Sửa
                </button>
                <button
                  onClick={() => dispatch(deleteEvent(event.id))}
                  className="px-3 py-1 bg-red-600 text-white rounded"
                >
                  Xoá
                </button>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EventManager;
