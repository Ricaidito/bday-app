import { useState } from "react";

const AddBirthday = () => {
  const [name, setName] = useState("");
  const [birthday, setBirthday] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    console.log(name, birthday);
    clearInputs();
  };

  const clearInputs = () => {
    setName("");
    setBirthday("");
  };

  return (
    <section className="container">
      <h1>Add a birthday</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          placeholder="Type the name..."
          onChange={e => setName(e.target.value)}
          value={name}
          required
        />
        <label htmlFor="birthday">Birthday:</label>
        <input
          type="date"
          onChange={e => setBirthday(e.target.value)}
          value={birthday}
          required
        />
        <button>Add</button>
      </form>
    </section>
  );
};

export default AddBirthday;
