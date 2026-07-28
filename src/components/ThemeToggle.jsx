import { FaMoon, FaSun } from 'react-icons/fa';

export default function ThemeToggle({ darkMode, setDarkMode }) {
  return (
    <button onClick={() => setDarkMode(!darkMode)} className={`p-3 rounded-full shadow-xl transition-transform hover:scale-110 ${darkMode ? 'bg-emerald-900/60 text-amber-300' : 'bg-emerald-100 text-amber-500'}`} aria-label="Toggle theme">
      {darkMode ? <FaSun size={22} /> : <FaMoon size={22} />}
    </button>
  );
}
