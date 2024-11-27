import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Product from "./Components/Product";
import Effect from "./Hooks/Effect";
import Refs from "./Hooks/Refs";
import Memo from "./Hooks/Memo";
import Callback from "./Hooks/Callback";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        {/* <Effect /> */}
        {/* <Refs /> */}

        {/* <Memo /> */}

        <Callback />
      </div>
    </>
  );
}

export default App;
