import { useDispatch, useSelector } from 'react-redux';
import { addItem, removeItem, updateQuantity } from '../features/cart/cartSlice';

const productList = [
  { id: 1, name: 'Product 1', price: 20 },
  { id: 2, name: 'Product 2', price: 15 },
  { id: 3, name: 'Product 3', price: 30 },
  { id: 4, name: 'Product 4', price: 25 },
];

const ShoppingCart = () => {
  const cartItems = useSelector(state => state.cart.cartItems);
  const dispatch = useDispatch();

  // Thêm sản phẩm vào giỏ
  const handleAddItem = (item) => {
    dispatch(addItem(item));
  };

  // Xóa sản phẩm khỏi giỏ
  const handleRemoveItem = (item) => {
    dispatch(removeItem(item));
  };

  // Cập nhật số lượng sản phẩm
  const handleUpdateQuantity = (item, quantity) => {
    if (quantity > 0) {
      dispatch(updateQuantity({ id: item.id, quantity }));
    }
  };

  // Tính tổng số lượng
  const calculateTotalQuantity = () => {
    return cartItems.reduce((total, item) => total + item.quantity, 0);
  };

  // Tính tổng tiền
  const calculateTotalPrice = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">🎯 Giỏ Hàng</h2>

      {/* Danh sách sản phẩm có sẵn */}
      <div className="mb-4">
        <h3 className="text-xl font-bold mb-2">Danh Sách Sản Phẩm</h3>
        <ul className="space-y-2">
          {productList.map(product => (
            <li key={product.id} className="flex justify-between items-center">
              <span>{product.name} - ${product.price}</span>
              <button
                onClick={() => handleAddItem(product)}
                className="px-4 py-2 bg-blue-500 text-white rounded">
                Thêm vào giỏ
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* Hiển thị giỏ hàng */}
      <div>
        <h3 className="text-xl font-bold mb-2">Giỏ Hàng</h3>
        {cartItems.length === 0 ? (
          <p>Giỏ hàng của bạn đang trống.</p>
        ) : (
          <ul>
            {cartItems.map(item => (
              <li key={item.id} className="mb-4 p-4 border rounded shadow">
                <h3 className="text-xl font-semibold">{item.name}</h3>
                <p>Price: ${item.price}</p>
                <div>
                  <span>Số lượng: </span>
                  <button
                    onClick={() => handleUpdateQuantity(item, item.quantity - 1)}
                    className="px-2 py-1 bg-gray-200 rounded">
                    -
                  </button>
                  <span className="mx-2">{item.quantity}</span>
                  <button
                    onClick={() => handleUpdateQuantity(item, item.quantity + 1)}
                    className="px-2 py-1 bg-gray-200 rounded">
                    +
                  </button>
                </div>
                <button
                  onClick={() => handleRemoveItem(item)}
                  className="text-red-500 mt-2">
                  Xóa
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Tính tổng số lượng và tổng tiền */}
      <div className="mt-4 flex justify-between">
        <h3 className="text-xl font-bold">Tổng Số Lượng: {calculateTotalQuantity()}</h3>
        <h3 className="text-xl font-bold">Tổng Tiền: ${calculateTotalPrice()}</h3>
      </div>
    </div>
  );
};

export default ShoppingCart;
