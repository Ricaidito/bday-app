import { useState, useEffect } from "react";
import BIRTHDAYS from "../mock/mockBirthdays";
import "../styles/BirthdaySummary.css";

const BirthdaySummary = () => {
  const user = "User";
  const [birthdays, setBirthdays] = useState([]);

  useEffect(() => {
    setBirthdays(BIRTHDAYS.slice(0, 2));
    //setBirthdays([]);
  }, []);

  return (
    <section className="container">
      <h2>Welcome back {user}!</h2>
      {birthdays.length ? (
        <div>
          <h3 className="bdays">There are some birthdays today 🥳!</h3>
          <ul>
            {birthdays.map(b => (
              <li className="bdays" key={b.id}>
                {b.name}
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <h3 className="no-bdays">No birthdays today 😔</h3>
      )}
    </section>
  );
};

export default BirthdaySummary;
