import BIRTHDAYS from "../mock/mockBirthdays";
import "../styles/BirthdayList.css";

const BirthdayList = () => {
  // TODO: Add the edit and delete buttons for each birthday
  const birthdays = BIRTHDAYS;
  return (
    <section className="container">
      <h3>Your birthdays list 🪅</h3>
      <table className="table">
        <thead>
          <tr>
            <th>👤 Name</th>
            <th>📅 Birthday date</th>
          </tr>
        </thead>
        <tbody>
          {birthdays.map(b => (
            <tr key={b.id}>
              <td>{b.name}</td>
              <td>{b.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
};

export default BirthdayList;
