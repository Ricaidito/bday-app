import { useRef } from "react";

const AddBirthday = () => {
  const nameRef = useRef(null);
  const birthdayRef = useRef(null);

  const handleSubmit = e => {
    e.preventDefault();
    console.log(nameRef.current.value, birthdayRef.current.value);
    clearInputs();
  };

  const clearInputs = () => {
    nameRef.current.value = "";
    birthdayRef.current.value = "";
  };

  return (
    <section className="container">
      <h1>Add a birthday</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          placeholder="Type the name..."
          ref={nameRef}
          required
        />
        <label htmlFor="birthday">Birthday:</label>
        <input type="date" ref={birthdayRef} required />
        <button>Add</button>
      </form>
    </section>
  );
};

export default AddBirthday;
