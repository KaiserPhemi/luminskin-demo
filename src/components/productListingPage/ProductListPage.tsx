// react library
import * as React from "react";

/**
 * @desc Product listing page
 * @author Oluwafemi Akinwa
 */
const ProductListPage = () => {
  const list = [
    { name: "Age Management Collection", price: 48 },
    { name: "Keratin Collection", price: 18 },
    { name: "Keratin Management", price: 10 },
    { name: "Dark Circle Defence", price: 28 },
  ];

  return (
    <div>
      <ul>
        {list.map((item, index) => (
          <li key={index} className="item-list">
            <span>{item.name}</span>
            <span>{`From $${item.price}`}</span>
            <span>
              <button>Add to Cart</button>
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductListPage;
