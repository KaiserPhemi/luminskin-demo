// react libraries
import * as React from "react";

// styles
import './nav-bar.scss';

// interface 
interface Props {
  handleSideBar: ()=>any;
}

/**
 * @desc Navigation bar
 * @author Oluwafemi Akinwa
 */
const NavigationBar: React.FC<Props> = ({ handleSideBar }) => {
  return (
    <header className="main-header">
      <div className="nav-links">
        <span className="logo-wrapper">lumin</span>
        <ul className="menu-links">
          <li className="text-format">Shop</li>
          <li className="text-format">Learn</li>
        </ul>
      </div>
      <div className="account-links">
        <div className="text-format">Account</div>
        <div className="text-format" onClick={handleSideBar}>
          Cart
        </div>
      </div>
    </header>
  );
};

export default NavigationBar;
