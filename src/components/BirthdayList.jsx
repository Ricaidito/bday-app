import { useEffect, useState } from "react";
import BIRTHDAYS from "../mock/mockBirthdays";
import "../styles/BirthdayList.css";

const BirthdayList = () => {
  const [birthdays, setBirthdays] = useState([]);

  const updateBirthday = id => {
    console.log(id);
  };

  const deleteBirthday = id => {
    console.log(id);
  };

  useEffect(() => {
    setBirthdays(BIRTHDAYS);
    //setBirthdays([]);
  }, []);

  return (
    <section className="container">
      <h3>Your birthdays list 🪅</h3>
      {birthdays.length ? (
        <div>
          <table className="table">
            <thead>
              <tr>
                <th>👤 Name</th>
                <th>📅 Birthday date</th>
                <th>⚙️ Options</th>
              </tr>
            </thead>
            <tbody>
              {birthdays.map(b => (
                <tr key={b.id}>
                  <td>{b.name}</td>
                  <td>{b.date}</td>
                  <td>
                    <button
                      className="btn btn-warning m-1"
                      onClick={() => updateBirthday(b.id)}
                    >
                      Update
                    </button>
                    <button
                      className="btn btn-danger m-1"
                      onClick={() => deleteBirthday(b.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <div>
          <h2>No birthdays added...</h2>
        </div>
      )}
    </section>
  );
};

export default BirthdayList;
