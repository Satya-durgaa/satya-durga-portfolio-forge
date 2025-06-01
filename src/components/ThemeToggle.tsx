
import { Moon, Sun } from 'lucide-react';
import { useTheme } from '@/contexts/ThemeContext';

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="relative w-12 h-6 bg-gray-200 dark:bg-gray-700 rounded-full p-1 transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800 group"
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
    >
      {/* Toggle background with gradient */}
      <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400 to-indigo-500 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
      
      {/* Sliding indicator */}
      <div
        className={`relative w-4 h-4 bg-white dark:bg-gray-800 rounded-full shadow-lg transform transition-all duration-300 ease-in-out flex items-center justify-center ${
          theme === 'dark' ? 'translate-x-6' : 'translate-x-0'
        }`}
      >
        {theme === 'light' ? (
          <Sun className="w-3 h-3 text-yellow-500 animate-spin-slow" />
        ) : (
          <Moon className="w-3 h-3 text-blue-400" />
        )}
      </div>
      
      {/* Background icons */}
      <div className="absolute inset-0 flex items-center justify-between px-1.5 pointer-events-none">
        <Sun className={`w-3 h-3 transition-opacity duration-300 ${theme === 'light' ? 'opacity-0' : 'opacity-40 text-yellow-400'}`} />
        <Moon className={`w-3 h-3 transition-opacity duration-300 ${theme === 'dark' ? 'opacity-0' : 'opacity-40 text-blue-400'}`} />
      </div>
    </button>
  );
};

export default ThemeToggle;
