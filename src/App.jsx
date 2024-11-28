import { createContext, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Product from "./Components/Product";
import Effect from "./Hooks/Effect";
import Refs from "./Hooks/Refs";
import Memo from "./Hooks/Memo";
import Callback from "./Hooks/Callback";
import Context from "./Hooks/Context/Context";

export const ThemeContext = createContext();

function App() {
  const [Theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((current) => (current == "light" ? "dark" : "light"));
  };

  return (
    <>
      {/* <ThemeContext.Provider value={Theme}> */}
        <div>
          {/* <Effect /> */}
          {/* <Refs /> */}

          {/* <Memo /> */}

          {/* <Callback /> */}
          {/* <Context /> */}
          {/* <button onClick={toggleTheme}>toggle</button> */}


          
        </div>
      {/* </ThemeContext.Provider> */}
    </>
  );
}

export default App;
