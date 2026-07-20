import { FiMoon, FiSun } from 'react-icons/fi';
import { useTheme } from '../context/ThemeContext.jsx';

export default function ThemeToggle({ className = '' }) {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
      aria-pressed={theme === 'dark'}
      className={`flex h-10 w-10 items-center justify-center rounded-full border border-forest/15 text-forest transition-colors hover:bg-forest/5 dark:border-beige/20 dark:text-beige dark:hover:bg-beige/10 ${className}`}
    >
      {theme === 'dark' ? <FiSun size={18} /> : <FiMoon size={18} />}
    </button>
  );
}
