import AddBirthday from "./components/AddBirthday";
import BirthdayList from "./components/BirthdayList";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import "./styles/App.css";

export default function App() {
  return (
    <div>
      <NavBar />
      <AddBirthday />
      <BirthdayList />
      <Footer/>
    </div>
  );
}
