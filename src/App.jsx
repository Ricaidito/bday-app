// import AddBirthday from "./components/AddBirthday";
// import BirthdayList from "./components/BirthdayList";
// import BirthdaySummary from "./components/BirthdaySummary";
// import NavBar from "./components/NavBar";
import LoginForm from "./components/Login";
import Footer from "./components/Footer";
import "./styles/App.css";

const App = () => {
  return (
    <div>
      <div className="position-absolute top-50 start-50 translate-middle">
        <LoginForm />
      </div>
      {/* <NavBar />
      <div className="container pt-1">
        <BirthdaySummary />
      </div>
      <div className="container pt-3">
        <AddBirthday />
      </div>
      <div className="container pt-3">
        <BirthdayList />
      </div> */}
      <Footer />
    </div>
  );
};

export default App;
