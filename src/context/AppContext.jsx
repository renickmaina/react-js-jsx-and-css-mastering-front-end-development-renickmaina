
import { createContext, useState } from "react";

export const AppContext = createContext();

export function AppProvider({ children }) {
  const [theme, setTheme] = useState("light");

  function toggleTheme() {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  }

  return (
    <AppContext.Provider value={{ theme, toggleTheme }}>
      <div className={theme === "dark" ? "dark bg-gray-900 text-white" : ""}>
        {children}
      </div>
    </AppContext.Provider>
  );
}
