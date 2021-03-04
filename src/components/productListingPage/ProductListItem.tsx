// react lbiraries
import * as React from "react";

// component(s)
import DefaultButton from "../commonComponents/DefaultButton";

// utils
import customText from '../../utils/constants';

// styles
import './list-item.scss';

// interface
interface Props {
  productName: string;
  productPrice: number;
  imgURL: string;
}

/**
 * @desc A single component for item
 * @param props 
 * @author Oluwafemi Akinwa
 */
const ProductListItem: React.FC<Props> = ({
  productName,
  productPrice,
  imgURL,
}) => {
  /**
   * @desc Adds item to cart
   * @author Oluwafemi Akinwa
   */
  const addItemHandler = () => {
    alert("Item added to cart.");
  };

  return (
    <div className="listed-product-wrapper">
      <img src={imgURL} alt="product_image" className="product-image" />
      <span className="product-title">{productName}</span>
      <span className="product-price">{`From $${productPrice.toFixed(
        2
      )}`}</span>
      <DefaultButton
        onClick={addItemHandler}
        buttonText={customText.ADD_ITEM_TEXT}
        btnClass={customText.ADD_ITEM_BTN_CLASS}
      />
    </div>
  );
};

export default ProductListItem;
