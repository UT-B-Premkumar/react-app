import React, { useEffect, useRef } from "react";

function Refs() {
  const inputRef = useRef();
  const display = () => {
    console.log(inputRef.current.value);
  };

  return (
    <div>
      <input type="text" ref={inputRef} />
      <h1>Value : {inputRef.current?.value}</h1>
      <button onClick={() => display()}>Get value</button>
    </div>
  );
}

export default Refs;
