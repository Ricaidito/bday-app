import "../styles/BirthdaySummary.css";

const BirthdaySummary = () => {
  const user = "User";
  const birthdays = [
    {
      id: 1,
      userId: 1,
      name: "Anthony",
      date: "02-29",
    },
    {
      id: 2,
      userId: 2,
      name: "Yuli",
      date: "02-29",
    },
  ];
  //const birthdays = [];

  return (
    <section className="container">
      <h2>Welcome back {user}!</h2>
      {birthdays.length ? (
        <ul>
          {birthdays.map(b => (
            <li className="bdays" key={b.id}>
              {b.name}
            </li>
          ))}
        </ul>
      ) : (
        <h3 className="no-bdays">No birthdays today 😔</h3>
      )}
    </section>
  );
};

export default BirthdaySummary;
