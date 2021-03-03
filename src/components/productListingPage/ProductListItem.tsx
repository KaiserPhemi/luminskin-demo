// react lbiraries
import * as React from "react";

// component(s)
import AddItemBtn from "../commonComponents/AddItemBtn";

// interface
interface Props {
  productName: string;
  productPrice: number;
}

/**
 * @desc A single component for item
 * @param props 
 * @author Oluwafemi Akinwa
 */
const ProductListItem: React.FC<Props> = ({ productName, productPrice }) => {
  /**
   * @desc Adds item to cart
   * @author Oluwafemi Akinwa
   */
  const addItemHandler = () => {
    console.log("we clicked");
  };

  return (
    <div>
      <img src="" alt="product_image" />
      <span>{productName}</span>
      <span>{`From $${productPrice}`}</span>
      <AddItemBtn onClick={addItemHandler} buttonText="Add to Cart" />
    </div>
  );
};

export default ProductListItem;
