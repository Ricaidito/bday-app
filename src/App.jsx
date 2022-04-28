import AddBirthday from "./components/AddBirthday";
import BirthdayList from "./components/BirthdayList";
import NavBar from "./components/NavBar";
import "./styles/App.css";

export default function App() {
  return (
    <div>
      <NavBar />
      <AddBirthday />
      <BirthdayList />
    </div>
  );
}
