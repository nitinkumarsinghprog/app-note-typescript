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

      <h1>My First Project in TypeScript</h1>
    </>
  );
}

export default Header;