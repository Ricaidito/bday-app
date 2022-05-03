import { useRef } from "react";
import "../styles/AddBirthday.css";

const AddBirthday = () => {
  const nameRef = useRef(null);
  const birthdayRef = useRef(null);

  /**
   * When the form is submitted, prevent the default action, split the birthday value into an array, and
   * then log the name and date to the console.
   */
  const handleSubmit = e => {
    e.preventDefault();
    const dateSplitted = birthdayRef.current.value.split("-");
    const date = `${dateSplitted[1]}-${dateSplitted[2]}`;
    console.log(nameRef.current.value, date);
    clearInputs();
  };

  /**
   * Clear the inputs by setting the value of the current name and birthday references to an empty
   * string.
   */
  const clearInputs = () => {
    nameRef.current.value = "";
    birthdayRef.current.value = "";
  };

  return (
    <section className="container">
      <h3>Add a birthday 🎈</h3>
      <form className="add-bd-form" onSubmit={handleSubmit}>
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
