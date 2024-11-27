import React, { useState } from "react";

function Callback() {
  const [dark, setdark] = useState(false);
  const [number, setNumber] = useState(0);

  const getItem = () => {
    return number + 1, number + 2, number + 3;
  };

  const theme = {
    backgroundColor: dark ? "black" : "white",
    color: dark ? "white" : "black",
    height: "200px", 
    
  };

  return (
    <div style={theme}>
      <input
        type="number"
        name=""
        id=""
        onChange={(e) => setNumber(e.target.value)}
      />
      <button onClick={() => setdark(!dark)}>Toggle </button>
    </div>
  );
}

export default Callback;