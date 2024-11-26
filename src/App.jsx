import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Product from "./Components/Product";

function App() {
  const [count, setCount] = useState(0);


  return (
    <>
      <div>
        <h1>{count}</h1>

        <button onClick={(prev) => setCount(count + 1)}>add</button>
        <br />

        <button onClick={(prev) => setCount(count - 2)}>Remove</button>

        <Product name="Earbuds" qty="20" quality="Good" price="300rs" />
      </div>
    </>
  );
}

export default App;
