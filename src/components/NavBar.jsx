import "../styles/NavBar.css";

const NavBar = () => {
  return (
    <div>
      <header className="header">
        <div className="titulo">Birthday Reminder</div>
        <a className="logout" href="#">Logout</a>
      </header>
    </div>
  );
};

export default NavBar;
