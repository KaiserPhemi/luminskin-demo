// react libraries
import * as React from "react";

// component(s)
import CartItemQuantity from './CartItemQuantity';

/**
 * @desc An item in the shopping cart
 * @author Oluwafemi Akinwa
 */
const CartItem = () => {
  /**
   * @desc Removes an item from the cart
   * @author Oluwafemi Akinwa
   */
  const handleItemDelete = () => {
    alert("Item was removed");
  };

  const handleIncreaseItem = () => {
    console.log("One item added");
  };

  const handleDecreaseItem = () => {
    console.log("One item removed");
  };

  const handleInputChange = () => {};

  return (
    <div className="cart-item-wrapper">
      <div className="product-wrapper">
        <div className="product-desc">
          <div className="product-name">Product Name</div>
          <div className="price-qtty-wrapper">
            <CartItemQuantity
              handleChange={handleInputChange}
              increment={handleIncreaseItem}
              decrement={handleDecreaseItem}
            />
            <div>total</div>
          </div>
        </div>
        <div className="product-img">
          <div className="delete-btn" onClick={handleItemDelete}>
            &#x2715;
          </div>
          <img src="" alt="" />
        </div>
      </div>
    </div>
  );
};

export default CartItem;
