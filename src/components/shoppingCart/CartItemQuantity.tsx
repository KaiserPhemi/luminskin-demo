// react libraries
import * as React from "react";

// interface
interface Props {
  increment: (evt: any, item: {}) => void;
  decrement: (evt: any, item: {}) => void;
  handleChange: () => void;
  item: { productCount :number};
}

/**
 * @desc
 * @author Oluwafem Akinwa
 */
const CartItemQuantity: React.FC<Props> = ({
  increment,
  decrement,
  handleChange,
  item,
}) => {
  return (
    <div className="item-quantity">
      <button
        name="minus"
        className="qtty-btn"
        onClick={(evt) => decrement(evt, item)}
      >
        -
      </button>
      <input type="number"
        step="1"
        min="1"
        value={item.productCount}
        onChange={handleChange}
      />
      <button
        name="plus"
        className="qtty-btn"
        onClick={(evt) => increment(evt, item)}
      >
        +
      </button>
    </div>
  );
};

export default CartItemQuantity;
