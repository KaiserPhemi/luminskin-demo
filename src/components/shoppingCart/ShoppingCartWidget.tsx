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

// interface 
interface Props {
  isClose: boolean;
  closeSideBar: ()=> any
}

/**
 * @desc Side bar shopping cart
 * @author Oluwafemi Akinwa
 */
const ShoppingCartWidget: React.FC<Props> = ({ isClose, closeSideBar }) => {
  const { shoppingCart } = React.useContext(ShoppingCartContext);
  const [cart, setCart] = shoppingCart;
  const [cartTotal, setCartTotal] = React.useState(0);

  /**
   * @desc Handles user subscription
   * @author Oluwafemi Akinwa
   */
  const handleSubscription = () => {
    alert("Feature not available yet.");
  };

  /**
   * @desc Calculates the cart total
   * @author Oluwafemi Akinwa
   */
  const getTotal = () => {
    return cart.reduce((acc, item) => {
      return acc + Number(item.price) * Number(item.productCount);
    }, 0);
  };

  /**
   * @desc Watches for changes in cart then call getTotal
   * @author Oluwafemi Akinwa
   */
  React.useEffect(() => {
    setCartTotal(getTotal());
  }, [cart]);

  /**
   * @desc Handles checkout
   * @author Oluwafemi Akinwa
   */
  const handleCheckout = () => {
    alert("Feature not available yet.");
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

  return (
    <div className={`shopping-cart-wrapper ${isClose ? "close-sidebar" : ""}`}>
      <div className="sidebar-close-btn" onClick={closeSideBar}></div>
      <div className="cart-title">Your Cart</div>
      <div>Dropdown</div>
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
        <div className="empty-cart">Cart is Empty</div>
      )}

      {cart.length > 0 && (
        <>
          <hr />
          <div className="subtotal">
            <span>Total:</span>
            <span>{`$${cartTotal.toFixed(2)}`}</span>
          </div>
        </>
      )}

      {cart.length > 0 && (
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
      )}
    </div>
  );
};;

export default ShoppingCartWidget;
