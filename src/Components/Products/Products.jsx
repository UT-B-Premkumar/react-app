import React, { useEffect, useRef, useState } from "react";
import { RiShoppingBag2Fill } from "@react-icons/all-files/ri/RiShoppingBag2Fill";
import { FaRegHeart } from "@react-icons/all-files/fa/FaRegHeart";
import { IoGitCompare } from "@react-icons/all-files/io5/IoGitCompare";
import { FaStar } from "@react-icons/all-files/fa/FaStar";
import { FaStarHalf } from "@react-icons/all-files/fa/FaStarHalf";
import { IoMdSearch } from "@react-icons/all-files/io/IoMdSearch";
import Cart from "../../assets/shop/cart.png";
import "./product.css";

const Products = ({ product, filterValue, addToCart , modal }) => {
  const [filterData, setfilterData] = useState(product);
  const [categoryFilter, setcategoryFilter] = useState("all");
  const clearRef = useRef([]);

  useEffect(() => {
    const filterArray = product.filter((product) =>
      product.search.includes(filterValue)
    );
    setfilterData(filterArray.length > 0 ? filterArray : product);
  }, [filterValue]);

  useEffect(() => {
    const filterArray = product.filter((product) =>
      product.categories.includes(categoryFilter)
    );
    setfilterData(filterArray.length > 0 ? filterArray : product);
  }, [categoryFilter]);

  const clearFilter = () => {
    clearRef.current.forEach((ref) => {
      if (ref) ref.checked = false; // Reset each checkbox
      setcategoryFilter("all");
    });
    console.log("All filters cleared");
  };

  return (
    <div className="container">
      <div className="shop-content row gutter-lg mb-10 mt-5">
        <div className="col-md-3 p-4">
          <h1>Filters</h1>

          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="flexRadioDefault"
              id="flexRadioDefault1"
              ref={(el) => (clearRef.current[0] = el)}
              onChange={(e) => setcategoryFilter("Electronics")}
            />
            <label className="form-check-label" htmlFor="flexRadioDefault1">
              Electronics
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="flexRadioDefault"
              id="Fashion"
              ref={(el) => (clearRef.current[1] = el)}
              onChange={(e) => setcategoryFilter("Fashion")}
            />
            <label className="form-check-label" htmlFor="Fashion">
              fashion
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="flexRadioDefault"
              id="Sport"
              ref={(el) => (clearRef.current[2] = el)}
              onChange={(e) => setcategoryFilter("Sport")}
            />
            <label className="form-check-label" htmlFor="Sport">
              Sport
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="flexRadioDefault"
              id="Cosmetics"
              ref={(el) => (clearRef.current[3] = el)}
              onChange={(e) => setcategoryFilter("Cosmetics")}
            />
            <label className="form-check-label" htmlFor="Cosmetics">
              Cosmetics
            </label>
          </div>
          <button className="clear" onClick={clearFilter}>
            Clear
          </button>
        </div>

        <div className="product-wrapper row col-md-9">
          {filterData.map((product, index) => {
            return (
              <div className="col-md-3" key={index}>
                <div className="product-wrap">
                  <div className="product text-center">
                    <div className="product-media">
                      <div>
                        <img
                          src={product.img}
                          alt="Product"
                          width="300"
                          height="338"
                        />
                      </div>
                      <div className="product-action-horizontal">
                        <div
                          className="btn-product-icon btn-cart "
                          title="Add to cart"
                          onClick={() => addToCart(product)}
                        >
                          <RiShoppingBag2Fill />
                        </div>
                        <div
                          className="btn-product-icon btn-wishlist "
                          title="Wishlist"
                        >
                          <FaRegHeart />
                        </div>
                        <div
                          className="btn-product-icon btn-compare "
                          title="Compare"
                        >
                          <IoGitCompare />
                        </div>
                        <div
                          className="btn-product-icon btn-quickview "
                          title="Quick View"
                        >
                          <IoMdSearch />
                        </div>
                      </div>
                    </div>
                    <div className="product-details">
                      <div className="product-cat">
                        <div>{product.categories}</div>
                      </div>
                      <h3 className="product-name">
                        <div>{product.productName}</div>
                      </h3>
                      <div className="ratings-container">
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStarHalf />
                        <div className="rating">
                          <span className=""></span>
                          <span className="tooltiptext tooltip-top"></span>
                        </div>
                        <div className="rating-reviews">(3 reviews)</div>
                      </div>
                      <div className="product-pa-wrapper">
                        <div className="product-price">${product.Price}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

     


      <div
        className={`modal fade ${modal ? "show" : ""}`}
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
        style={{ display: `${modal ? "block" : "none"}` }}
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-body">
              <div className="cart-modal">
                <img src={Cart} alt="" />
                <h2 className="text-success"> Your Product added cart</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default React.memo(Products);
