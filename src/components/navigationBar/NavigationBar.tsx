// react libraries
import * as React from "react";

// styles
import './nav-bar.scss';

/**
 * @desc Navigation bar
 * @author Oluwafemi Akinwa
 */
const NavigationBar = () => {
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
        <div className="text-format">Cart</div>
      </div>
    </header>
  );
};

export default NavigationBar;
