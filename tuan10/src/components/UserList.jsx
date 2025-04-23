import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers } from '../features/users/userSlice';

const UserList = () => {
  const dispatch = useDispatch();
  const { users, status, error } = useSelector(state => state.users);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">📡 Câu 6: Đồng bộ dữ liệu từ API</h2>

      {status === 'loading' && <p>Đang tải dữ liệu...</p>}
      {status === 'failed' && <p className="text-red-500">Lỗi: {error}</p>}

      {status === 'succeeded' && (
        <ul className="space-y-2">
          {users.map(user => (
            <li key={user.id} className="border p-3 rounded shadow-sm">
              <p><strong>{user.name}</strong></p>
              <p>Email: {user.email}</p>
              <p>Địa chỉ: {user.address.city}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default UserList;
