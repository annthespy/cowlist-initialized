import React, { useState } from "react";
import jquery from "jquery";

const CowForm = ({ postCows }) => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    postCows(name, description);
    //console.log(e.target.id);
    setName("");
    setDescription("");
  };

  return (
    <form id="form" onSubmit={handleSubmit}>
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="cow name"
        type="text"
        name="cowName"
        required
      />
      <input
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="description"
        type="text"
        name="cowDescription"
        required
      />
      <button type="submit">Add a new cow</button>
    </form>
  );
};

export default CowForm;
