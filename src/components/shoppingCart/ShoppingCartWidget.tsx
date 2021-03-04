// react libraries
import * as React from "react";

// component(s)
import DefaultButton from '../commonComponents/DefaultButton';

// utils
import customText from '../../utils/constants';

// styles
import './styles.scss';

/**
 * @desc
 * @author Oluwafemi Akinwa
 */
const ShoppingCartWidget = () => {
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
      <div></div>
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
