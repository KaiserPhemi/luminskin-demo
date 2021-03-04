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
        <span>lumin</span>
        <nav>
          <ul>
            <li>Shop</li>
            <li>Learn</li>
          </ul>
        </nav>
      </div>
      <div className='account-links'>
        <div>Account</div>
        <div>Cart</div>
      </div>
    </header>
  );
};

export default NavigationBar;
