import React from "react";

const CowList = ({ cows, handleCowClick, handleDelete, handleChange }) => {
  return (
    <ul>
      {cows.map((cow, i) => (
        <li onClick={() => handleCowClick(cow.name, cow.description)}>
          {cow.name}{" "}
          <p>
            <button type="button" onClick={() => handleDelete(cow.id)}>
              Delete
            </button>{" "}
            <button type="button" onClick={() => handleChange(cow)}>
              Update
            </button>
          </p>
        </li>
      ))}
    </ul>
  );
};

export default CowList;
