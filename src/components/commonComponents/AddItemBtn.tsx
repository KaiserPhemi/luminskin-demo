// react libraries
import * as React from "react";

// interface
interface Props {
  buttonText: string;
  onClick: () => void;
}

/**
 * @desc Add to cart button component
 * @author Oluwafemi Akinwa
 */
const AddItemBtn: React.FC<Props> = ({ buttonText, onClick }) => {
  return (
    <button
      style={{
        cursor: "pointer",
      }}
      onClick={onClick}
    >
      {buttonText}
    </button>
  );
};

export default AddItemBtn;
