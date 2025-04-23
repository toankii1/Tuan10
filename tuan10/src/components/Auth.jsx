import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login, logout } from '../features/auth/authSlice';

const Auth = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const { user, isLoggedIn } = useSelector(state => state.auth);

  const handleLogin = (e) => {
    e.preventDefault();
    if (email.trim() && password.trim()) {
      // Giả lập đăng nhập, thực tế bạn sẽ gọi API
      dispatch(login({ email }));
      setEmail('');
      setPassword('');
    }
  };

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">🎯 Câu 5: Quản lý User Đăng Nhập</h2>

      {!isLoggedIn ? (
        <form onSubmit={handleLogin} className="space-y-4 max-w-md">
          <div>
            <label className="block text-sm font-medium mb-1">Email:</label>
            <input
              type="email"
              className="w-full p-2 border rounded"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Mật khẩu:</label>
            <input
              type="password"
              className="w-full p-2 border rounded"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Nhập mật khẩu"
              required
            />
          </div>
          <button
            type="submit"
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            Đăng nhập
          </button>
        </form>
      ) : (
        <div className="bg-green-100 p-4 rounded">
          <p className="text-lg font-semibold">👋 Xin chào, {user.email}!</p>
          <button
            onClick={handleLogout}
            className="mt-4 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
          >
            Đăng xuất
          </button>
        </div>
      )}
    </div>
  );
};

export default Auth;
