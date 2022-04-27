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
          <tr>
            <td>{UserBithday.BirthdayName}</td>
            <td>{UserBithday.BirthdayDate}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default BirthdayList;
