// react lbiraries
import * as React from "react";

// component(s)
import AddItemBtn from "../commonComponents/AddItemBtn";

/**
 * @desc Product item component
 * @author Oluwafemi Akinwa
 */
const ProductListItem = ({}) => {
  return (
    <div>
      <img src="" alt="product_image" />
      <span>Product Name</span>
      <span>Product Price</span>
      <AddItemBtn buttonText="Add to Cart" />
    </div>
  );
};

export default ProductListItem;
