import { useState } from "react";

function App() {
  const [name, setName] = useState("Himaja");
  const [age, setAge] = useState("20");
  const [gender, setGender] = useState("Female");
  const [branch, setBranch] = useState("CSE");

  const handleSubmit = (e) => {
    e.preventDefault();

    alert(
      `Name: ${name}, Age: ${age}, Branch: ${branch}, Gender: ${gender}`
    );
  };

  const handleClear = () => {
    setName("");
    setAge("");
    setGender("");
    setBranch("");
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h2>Student Form</h2>

      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <br />
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        <br /><br />

        <label>Age:</label>
        <br />
        <input
          type="number"
          value={age}
          onChange={(e) => setAge(e.target.value)}
          required
        />

        <br /><br />

        <label>Gender:</label>
        <input
          type="radio"
          name="gender"
          value="Male"
          checked={gender === "Male"}
          onChange={(e) => setGender(e.target.value)}
        />
        Male

        <input
          type="radio"
          name="gender"
          value="Female"
          checked={gender === "Female"}
          onChange={(e) => setGender(e.target.value)}
        />
        Female

        <br /><br />

        <label>Branch:</label>
        <select
          value={branch}
          onChange={(e) => setBranch(e.target.value)}
          required
        >
          <option value="">Select Branch</option>
          <option value="CSE">CSE</option>
          <option value="ECE">ECE</option>
          <option value="EEE">EEE</option>
          <option value="IT">IT</option>
        </select>

        <br /><br />

        <button type="submit">Submit</button>
        {" "}
        <button type="button" onClick={handleClear}>
          Clear
        </button>
      </form>
    </div>
  );
}

export default App;