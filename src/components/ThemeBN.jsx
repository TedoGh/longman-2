import lightMode from "../imgs/lightMode.svg";
import darkMode from "../imgs/darkMode.svg";
import { useState } from "react";

export default function ThemeBN() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleThemeBN = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  return (
    <div className="flex">
      <button onClick={toggleThemeBN}>
        <img
          src={isDarkMode ? lightMode : darkMode}
          alt={isDarkMode ? "Light Mode" : "Dark Mode"}
        />
      </button>
    </div>
  );
}
