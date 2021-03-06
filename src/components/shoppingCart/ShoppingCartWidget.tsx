// react libraries
import * as React from "react";

// component(s)
import DefaultButton from '../commonComponents/DefaultButton';
import CartItem from "./CartItem";

// utils
import customText from '../../utils/constants';

// context 
import {ShoppingCartContext} from '../shoppingCartContext/ShoppingCartContext'

// styles
import './styles.scss';

/**
 * @desc Side bar shopping cart
 * @author Oluwafemi Akinwa
 */
const ShoppingCartWidget = () => {
  const { shoppingCart } = React.useContext(ShoppingCartContext);
  const [cart, setCart] = shoppingCart;
  /**
   * @desc Handles user subscription
   * @author Oluwafemi Akinwa
   */
  const handleSubscription = () => {
    alert("Feature not available yet.");
  };

  /**
   * @desc Handles checkout
   * @author Oluwafemi Akinwa
   */
  const handleCheckout = () => {
    alert("Feature not available yet.");
  };

  /**
   * @desc Adds or reduce item quantity in cart
   * @param evt
   * @author Oluwafemi Akinwa
   */
  const handleItemQuantity = (evt: any, product: any) => {
    const { name } = evt.target;
    const modifiedCart = cart.map((item) => {
      let tempItem = Object.assign({}, item);
      if (tempItem.id === product.id) {
        if (name === "plus") {
          tempItem.productCount++;
        } else if (name === "minus") {
          if (tempItem.productCount <= 1) {
            return tempItem;
          } else {
            tempItem.productCount--;
          }
        }
      }
      return tempItem;
    });
    setCart([...modifiedCart]);
  };

  /**
   * @desc Deletes an item from the cart
   * @param product
   * @author Oluwafemi Akinwa
   */
  const deleteCartItem = (product: any) => {
    const filteredCart = cart.filter((item) => item.id !== product.id);
    setCart([...filteredCart]);
  };

  return (
    <div className="shopping-cart-wrapper">
      {cart.length > 0 ? (
        cart.map((cartItem, index) => (
          <CartItem
            item={cartItem}
            key={index}
            handleItemQuantity={handleItemQuantity}
            handleItemDelete={deleteCartItem}
          />
        ))
      ) : (
        <div>Cart is Empty</div>
      )}

      <div className="cart-btn-wrapper">
        <DefaultButton
          buttonText={customText.SUBSCRIPTION_TEXT}
          onClick={handleSubscription}
          btnClass={customText.SUBSCRIPTION_BTN_CLASS}
        />
        <DefaultButton
          buttonText={customText.CHECKOUT_TEXT}
          onClick={handleCheckout}
          btnClass={customText.CHECKOUT_BTN_CLASS}
        />
      </div>
    </div>
  );
};

export default ShoppingCartWidget;
