import React, { useContext } from "react";
import { ThemeContext } from "../../App";

function User() {


  const  Theme = useContext(ThemeContext);


  const themeData = {
    backgroundColor: Theme === "dark" ? "black" : "white",
    color : Theme === "dark" ? "white" : "black"
  }

  return (
    <div>
      <h1 style={themeData}>User</h1>
    </div>
  );
}

export default User;
