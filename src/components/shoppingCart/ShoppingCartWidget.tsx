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

  return (
    <div className="shopping-cart-wrapper">
      <div></div>
      <div></div>
      {cart.length > 0
        ? cart.map((cartItem, index) => (
            <CartItem item={cartItem} key={index} />
          ))
        : "Cart is Empty"}
      <div></div>
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
