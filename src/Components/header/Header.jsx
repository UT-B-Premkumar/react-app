import React, { useEffect, useState } from "react";
import "./header.css";
import { FaCartArrowDown } from "@react-icons/all-files/fa/FaCartArrowDown";
import { IoMdSearch    } from "@react-icons/all-files/io/IoMdSearch";

function Header({filterFunction , cart}) {


  return (
    <header className="">
      <div className="logo">
        <img
          src="https://frontend.utwebapps.com/assets/img/icons/logo.svg"
          alt=""
        />
      </div>
      <div className="cart-search-container">
        <div className="d-flex align-items-center">

       <div className="search-wrapper">
       <IoMdSearch />
       <input type="text"  className="ms-2" onChange={filterFunction}/>
       </div>
        </div>
        <div className="cart">
          <FaCartArrowDown />
          <span className="Count">{cart.length}</span>
        </div>
      </div>
    </header>
  );
}

export default React.memo(Header);
