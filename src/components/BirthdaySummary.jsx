import "../styles/BirthdaySummary.css";

const BirthdaySummary = () => {
  const mockUser = "User";
  const mockData = [
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
  //const mockData = [];

  return mockData.length ? (
    <section className="container">
      <h2>Welcome back {mockUser}!</h2>
      <h3 className="bdays">Today's birthdays 🎉</h3>
      <ul>
        {mockData.map(b => (
          <li className="bdays" key={b.id}>
            {b.name}
          </li>
        ))}
      </ul>
    </section>
  ) : (
    <section className="container">
      <h2>Welcome back {mockUser}!</h2>
      <h3 className="no-bdays">No birthdays today 😔</h3>
    </section>
  );
};

export default BirthdaySummary;
