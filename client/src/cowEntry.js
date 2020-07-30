import React from "react";

const CowEntry = ({ currentCow }) => {
  return (
    <div>
      <h3>Click a Cow to see it's description: </h3>
      <div style={{ color: "red" }}>
        {currentCow.name} {currentCow.description}
      </div>
    </div>
  );
};

export default CowEntry;
