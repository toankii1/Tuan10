import { useDispatch, useSelector } from 'react-redux';
import { toggleTheme } from '../features/theme/themeSlice';

const ThemeToggle = () => {
  const theme = useSelector(state => state.theme);
  const dispatch = useDispatch();

  return (
    <div className="mb-8 text-center">
      <button
        onClick={() => dispatch(toggleTheme())}
        className="px-4 py-2 rounded bg-purple-600 text-white hover:bg-purple-700"
      >
        Chuyển sang {theme === 'light' ? 'Dark' : 'Light'} Mode
      </button>
    </div>
  );
};

export default ThemeToggle;
