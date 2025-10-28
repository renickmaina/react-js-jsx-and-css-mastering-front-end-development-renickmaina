
import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import { Link } from "react-router-dom";

function Header() {
  const { toggleTheme } = useContext(AppContext);

  return (
    <header className="bg-blue-600 text-white flex justify-between p-4">
      <h1 className="font-bold text-lg">My React Dashboard</h1>
      <nav className="space-x-4">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
      </nav>
      <button
        onClick={toggleTheme}
        className="bg-white text-blue-600 px-2 py-1 rounded"
      >
        Toggle Theme
      </button>
    </header>
  );
}

export default Header;
