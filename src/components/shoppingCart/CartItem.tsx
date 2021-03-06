// react libraries
import * as React from "react";

// component(s)
import CartItemQuantity from './CartItemQuantity';

// interface
interface Props {
  item: {
    productCount: number;
    image_url: string;
    title: string;
    price: number;
  };
  handleItemQuantity: (evt: any, item: any) => void;
  handleItemDelete: (item: any) => any;
}

/**
 * @desc An item in the shopping cart
 * @author Oluwafemi Akinwa
 */
const CartItem: React.FC<Props> = ({
  item,
  handleItemQuantity,
  handleItemDelete,
}) => {
  const handleInputChange = () => {};

  return (
    <div className="cart-item-wrapper">
      <div className="product-wrapper">
        <div className="product-desc">
          <div className="product-name">{item.title}</div>
          <div className="price-qtty-wrapper">
            <CartItemQuantity
              handleChange={handleInputChange}
              increment={handleItemQuantity}
              decrement={handleItemQuantity}
              item={item}
            />
            <div>{`$${item.price.toFixed(2)}`}</div>
          </div>
          <hr />
          <div className="subtotal-wrapper">
            <span>Subtotal:</span>
            <span>
              {`$${(
                Number(item.price.toFixed(2)) * Number(item.productCount)
              ).toFixed(2)}`}
            </span>
          </div>
        </div>
        <div className="product-img">
          <div className="delete-btn" onClick={() => handleItemDelete(item)}>
            &#x2715;
          </div>
          <div>
            <img
              src={item.image_url}
              alt="product-image"
              className="cart-product-image"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
