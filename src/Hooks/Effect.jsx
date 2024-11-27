import React, { useEffect, useState } from "react";

function Effect() {
  const [num, setnum] = useState(0);

  useEffect(() => {
    // setnum(20);

    return () => {
      // setnum(0);
    };
  }, [num]);
  return (
    <div>
      <h2>{num}</h2>
      <button onClick={() => setnum((prev) => prev + 1)}>add</button>
    </div>
  );
}

export default Effect;
