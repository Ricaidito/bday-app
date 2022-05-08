import { useRef } from "react";
import "../styles/AddBirthday.css";

const AddBirthday = () => {
  const nameRef = useRef(null);
  const birthdayRef = useRef(null);

  const addBirthday = e => {
    e.preventDefault();
    const dateSplitted = birthdayRef.current.value.split("-");
    const date = `${dateSplitted[1]}-${dateSplitted[2]}`;
    console.log(nameRef.current.value, date);
    clearInputs();
  };

  const clearInputs = () => {
    nameRef.current.value = "";
    birthdayRef.current.value = "";
  };

  return (
    <section className="container">
      <h3>Add a birthday 🎈</h3>
      <form className="add-bd-form" onSubmit={addBirthday}>
        <div className="input-group mb-3 change-width">
          <span className="input-group-text">Name</span>
          <input
            type="text"
            className="form-control"
            placeholder="Type the name..."
            required
          />
        </div>
        <div className="input-group mb-3 change-width">
          <span className="input-group-text">Birthday</span>
          <input
            type="date"
            className="form-control"
            ref={birthdayRef}
            required
          />
        </div>
        <button className="btn btn-success">Add</button>
      </form>
    </section>
  );
};

export default AddBirthday;
