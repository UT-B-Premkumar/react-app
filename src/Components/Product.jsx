import React from "react";

function Product({ name, qty, quality, price }) {
  return (
    <div>
      <table>
        <tr>
          <th>Product Name</th>
          <th>Quantity</th>
          <th>Quality</th>
          <th>Price</th>
        </tr>
        <tbody>
          <tr>
            <td>{name}</td>
            <td>{qty}</td>
            <td>{quality}</td>
            <td>{price}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Product;
