import AddBirthday from "./components/AddBirthday";
import BirthdayList from "./components/BirthdayList";
import "./styles/App.css";

export default function App() {
  return (
    <div>
      App component
      <AddBirthday />
      <BirthdayList />
    </div>
  );
}
