interface HeaderProps {
  darkMode: boolean;
  toggleTheme: () => void;
}

function Header({ darkMode, toggleTheme }: HeaderProps) {
  return (
    <>
      <button className="theme-toggle" onClick={toggleTheme}>
        {darkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
      </button>

      <h1>My Notes App</h1>
    </>
  );
}

export default Header;