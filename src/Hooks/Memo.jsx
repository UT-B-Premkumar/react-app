import React, { useMemo, useState } from "react";

function Memo() {
  const [count, setcount] = useState(0);
  const [input, setinput] = useState("");

  useMemo(() => {
    console.log("component reder outside");
  }, []);

  const logFun = () => {
    console.log(input);
  };

  return (
    <div>
      <h1>{input}</h1>
      <input type="text" onChange={(e) => setinput(e.target.value)} />
      <button onClick={logFun}>click</button>
    </div>
  );
}

export default Memo;
