import AddBirthday from "./components/AddBirthday";
import BirthdayList from "./components/BirthdayList";
import BirthdaySummary from "./components/BirthdaySummary";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import "./styles/App.css";

const App = () => {
  return (
    <div>
      <NavBar />
      <div className="container pt-4">
        <BirthdaySummary />
      </div>
      <div className="container pt-4">
        <AddBirthday />
      </div>
      <div className="container pt-4">
        <BirthdayList />
      </div>
      <Footer />
    </div>
  );
};

export default App;
