import * as React from "react";

/**
 * @desc
 * @author Oluwafemi Akinwa
 */
const NavigationBar = () => {
  return (
    <header className="main-header">
      <div>
        <span>lumin</span>
        <nav>
          <ul>
            <li>Shop</li>
            <li>Learn</li>
          </ul>
        </nav>
      </div>
      <div>
        <div>Account</div>
        <div>Cart</div>
      </div>
    </header>
  );
};

export default NavigationBar;
