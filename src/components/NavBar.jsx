import "../styles/NavBar.css";

const NavBar = () => {
  const logout = () => {
    alert("Logout!");
  };

  return (
    <div>
      <header className="header fixed-top">
        <div className="titulo">Birthday Reminder 🎂</div>
        <button className="logout btn btn-danger" onClick={logout}>
          Logout
        </button>
      </header>
    </div>
  );
};

export default NavBar;
