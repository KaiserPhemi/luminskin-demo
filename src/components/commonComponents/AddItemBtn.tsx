// react libraries
import * as React from "react";

// interface
interface Props {
  buttonText: string;
}

/**
 * @desc Add to cart button component
 * @author Oluwafemi Akinwa
 */
const AddItemBtn: React.FC<Props> = ({ buttonText }) => {
  return <button>{buttonText}</button>;
};

export default AddItemBtn;
