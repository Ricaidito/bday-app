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
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            placeholder="Type the name..."
            ref={nameRef}
            required
          />
        </div>
        <div>
          <label htmlFor="birthday">Birthday:</label>
          <input type="date" ref={birthdayRef} required />
        </div>
        <button className="btn btn-success">Add</button>
      </form>
    </section>
  );
};

export default AddBirthday;
