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
import Products from "./Components/Products/Products";
import Layout from "./Layout";
import Home from "./Home.jsx";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";
import { BrowserRouter, Route, Routes } from "react-router";
import Weather from "./Components/Weather/Weather.jsx";
export const ThemeContext = createContext();

function App() {
  const [Theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((current) => (current == "light" ? "dark" : "light"));
  };

  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* <Route path="/" element={<Home />} /> */}
          <Route index element={<Home />} />
          <Route path="/ecommerce" element={<Layout />} />
          <Route path="/weather" element={<Weather />} />
        </Routes>
      </BrowserRouter>

      {/* <ThemeContext.Provider value={Theme}> */}
      {/* // <div> */}
      {/* <Effect /> */}
      {/* <Refs /> */}

      {/* <Memo /> */}

      {/* <Callback /> */}
      {/* <Context /> */}
      {/* <button onClick={toggleTheme}>toggle</button> */}

      {/* <Layout /> */}
      {/* </div> */}
      {/* </ThemeContext.Provider> */}
    </>
  );
}

export default App;
