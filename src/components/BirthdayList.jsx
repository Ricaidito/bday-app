import "../styles/BirthdayList.css";
import UserBithday from "../Mock/UserBirthdayMock.json";

const BirthdayList = () => {
  return (
    <div className="container">
      <table className="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {UserBithday.map((value, index) => {
            if (value.UserId === 1) {
              return (
                <tr key={index}>
                  <td>{value.BirthdayName}</td>
                  <td>{value.BirthdayDate}</td>
                </tr>
              );
            }
            return null;
          })}
        </tbody>
      </table>
    </div>
  );
};

export default BirthdayList;
