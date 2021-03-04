// react libraries
import * as React from "react";

// styles
import "./styles.scss";

// interface
interface Props {
  buttonText: string;
  onClick: () => void;
  btnClass?: string;
}

/**
 * @desc Add to cart button component
 * @author Oluwafemi Akinwa
 */
const DefaultButton: React.FC<Props> = ({ buttonText, onClick, btnClass }) => {
  return (
    <button className={`default-btn ${btnClass || ""}`} onClick={onClick}>
      {buttonText}
    </button>
  );
};

export default DefaultButton;
