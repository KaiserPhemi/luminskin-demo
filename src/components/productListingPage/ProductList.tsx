// react libraries
import * as React from "react";

// components
import ProductListItem from "./ProductListItem";

/**
 * @desc Displays list of items on page
 * @author Oluwafemi Akinwa
 */
const ProductList = () => {
  const list = [
    { name: "Age Management Collection", price: 48 },
    { name: "Keratin Collection", price: 18 },
    { name: "Keratin Management", price: 10 },
    { name: "Dark Circle Defence", price: 28 },
  ];
  return (
    <div>
      {list.map((item, index) => (
        <ProductListItem
          key={index}
          productName={item.name}
          productPrice={item.price}
        />
      ))}
    </div>
  );
};

export default ProductList;
