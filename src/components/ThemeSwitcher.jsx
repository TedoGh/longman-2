import { useEffect, useState } from "react";
import lightMode from "../assets/images/lightMode.svg";
import darkMode from "../assets/images/darkMode.svg";

export default function ThemeSwitcher() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [isDarkMode]);

  return (
    <div className="flex">
      <button onClick={toggleTheme}>
        <img
          src={isDarkMode ? lightMode : darkMode}
          alt={isDarkMode ? "Light Mode" : "Dark Mode"}
        />
      </button>
    </div>
  );
}
