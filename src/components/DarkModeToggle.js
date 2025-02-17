import{ useState } from 'react';
import on from '../assets/ON.svg'
import of from '../assets/OFF.svg'

const DarkModeToggle = () => {
  const [darkMode, setDarkMode] = useState(false);

  // Función para alternar entre modos
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    
    if (darkMode) {
      document.documentElement.classList.remove('dark');
    } else {
      document.documentElement.classList.add('dark');
    }
  };

  return (
    <button onClick={toggleDarkMode}> <img className='xs:w-6 w-8 lg:w-10' src={darkMode ? (of) : (on)} alt="switch button" /> </button>
  );
};

export default DarkModeToggle;