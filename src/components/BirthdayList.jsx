import BIRTHDAYS from "../mock/mockBirthdays";
import "../styles/BirthdayList.css";

const BirthdayList = () => {
  // TODO: Add the edit and delete buttons for each birthday
  return (
    <div className="container">
      <h3>Your birthdays list</h3>
      <table className="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Birthday date</th>
            <th>Options</th>
          </tr>
        </thead>
        <tbody>
          {BIRTHDAYS.map(b => (
            <tr key={b.id}>
              <td>{b.name}</td>
              <td>{b.date}</td>
              <td><button>Delete</button></td>
              <td><button>Update</button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BirthdayList;
