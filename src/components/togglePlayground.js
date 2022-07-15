import { useEffect, useState } from 'react';
import { AbdsSwitch } from '@abds/react-bindings';

export const TogglePlayground = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleTheme = () => {
    const body = document.querySelector('body');

    ['bg-black', 'text-white'].forEach((className) => {
      body.classList[darkMode ? 'add' : 'remove'](className);
    });
  };

  useEffect(toggleTheme, [darkMode]);

  return (
    <section className="flex gap-x-4" id="toggle-playground">
      <AbdsSwitch
        id="toggle-theme"
        onClick={() => {
          setDarkMode(!darkMode);
        }}
      >
        Toggle theme
      </AbdsSwitch>
    </section>
  );
};
