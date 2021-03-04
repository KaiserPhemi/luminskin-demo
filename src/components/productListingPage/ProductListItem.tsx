// react lbiraries
import * as React from "react";

// component(s)
import DefaultButton from "../commonComponents/DefaultButton";

// utils
import customText from '../../utils/constants';

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
    alert("Item added to cart.");
  };

  return (
    <div>
      <img src="" alt="product_image" />
      <span>{productName}</span>
      <span>{`From $${productPrice}`}</span>
      <DefaultButton
        onClick={addItemHandler}
        buttonText={customText.ADD_ITEM_TEXT}
        btnClass={customText.ADD_ITEM_BTN_CLASS}
      />
    </div>
  );
};

export default ProductListItem;
