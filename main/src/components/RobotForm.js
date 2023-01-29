import { useState } from "react";

function RobotForm() {
  const [name, setName] = useState("");
  const [type, setType] = useState("");
  const [mass, setMass] = useState("");

  const [nameText, setNameText] = useState("");

  return (
    <form>
      <h1>Robot form</h1>
      <label for="name">name</label>
      <input
        type="text"
        name="name"
        id="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      ></input>
      <label for="type">type</label>
      <input
        type="text"
        name="type"
        id="type"
        value={type}
        onChange={(e) => setType(e.target.value)}
      ></input>
      <label for="mass">mass</label>
      <input
        type="text"
        name="mass"
        id="mass"
        value={mass}
        onChange={(e) => setMass(e.target.value)}
      ></input>
      <button
        id="addButton"
        onClick={() => {
          setNameText(name);
          setName("");
          setType("");
          setMass("");
        }}
      >
        add
      </button>
      <p>{nameText}</p>
    </form>
  );
}

export default RobotForm;
