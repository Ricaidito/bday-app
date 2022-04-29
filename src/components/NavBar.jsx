import "../styles/NavBar.css";

const NavBar = () => {
  /*
  Lo cambie a botón porque tiraba un warning y decía que usar un <a>
  no era recomendable
  */

  return (
    <div>
      <header className="header">
        <div className="titulo">Birthday Reminder 🎂</div>
        <button className="logout btn btn-danger">Logout</button>
      </header>
    </div>
  );
};

export default NavBar;
