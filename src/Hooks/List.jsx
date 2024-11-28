import React, { useEffect, useState } from "react";

function List({ getItem }) {
  const [lists, setlists] = useState([]);
  useEffect(() => {
    console.log("set Items");

    setlists(getItem());
  }, [getItem]);
  return (
    <div>
      {lists.map((items, index) => {
        return <p key={index}>{items}</p>;
      })}
    </div>
  );
}

export default List;
