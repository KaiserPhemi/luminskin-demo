// react libraries
import * as React from "react";

// components
import ProductListingPage from './productListingPage/ProductListPage';
import NavigationBar from "./navigationBar/NavigationBar";
import ShoppingCartWidget from "./shoppingCart/ShoppingCartWidget";

// styles
import './index.scss'

// interface
interface Props {}

/**
 * @desc App
 */
const App: React.FC<Props> = () => {
  return (
    <div>
      <NavigationBar />
      <ProductListingPage />
      <ShoppingCartWidget />
    </div>
  );
};

export default App;
