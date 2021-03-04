// react libraries
import * as React from "react";

// interface
interface Props {
  increment: () => void;
  decrement: () => void;
  handleChange: () => void;
}

/**
 * @desc
 */
const CartItemQuantity: React.FC<Props> = ({
  increment,
  decrement,
  handleChange,
}) => {
  return (
    <div className="item-quantity">
      <button className="qtty-btn" onClick={decrement}>
        -
      </button>
      <input type="number" step="1" min="1" value="1" onChange={handleChange} />
      <button className="qtty-btn" onClick={increment}>
        +
      </button>
    </div>
  );
};

export default CartItemQuantity;
