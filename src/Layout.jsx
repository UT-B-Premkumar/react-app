import React, { useEffect, useState } from "react";
import Product from "./Components/Product";
import Products from "./Components/Products/Products";
import Header from "./Components/header/Header";
import ProductData from "./Data/Data";

function Layout() {
  const [search, setsearch] = useState("");
  const [modal, setmodal] = useState(false);

  const filterFunction = (e) => {
    setsearch(e.target.value.trim().toLocaleLowerCase());
  };
  const [cart, setcart] = useState([]);

  const addToCart = async (singleData) => {
    setmodal(true);

    setcart([...cart, singleData]);
    setTimeout(() => {
      setmodal(false);
    }, 1500);
  };



  return (
    <div className="layout">
      <Header filterFunction={filterFunction} cart={cart} />

      <Products
        product={ProductData}
        filterValue={search}
        addToCart={addToCart}
        modal={modal}
      />
    </div>
  );
}

export default Layout;
