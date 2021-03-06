// react libraries
import * as React from "react";

// components
import ProductListingPage from './productListingPage/ProductListPage';
import NavigationBar from "./navigationBar/NavigationBar";
import ShoppingCartWidget from "./shoppingCart/ShoppingCartWidget";

// context provider
import {ShoppingCartProvider} from '../components/shoppingCartContext/ShoppingCartContext';

// styles
import './index.scss'

// interface
interface Props {}

/**
 * @desc App
 */
const App: React.FC<Props> = () => {
  const [isClose, setIsClose] = React.useState(false);
  /**
   * @desc Handles closing side bar
   * @author Oluwafemi Akinwa
   */
  const closeSideBar = () => {
    setIsClose(!isClose);
  };

  return (
    <div style={{ height: "100%", position: "relative" }}>
      <ShoppingCartProvider>
        <div>
          <NavigationBar handleSideBar={closeSideBar} />
          <ProductListingPage handleSideBar={closeSideBar} />
        </div>
        <ShoppingCartWidget closeSideBar={closeSideBar} isClose={isClose} />
      </ShoppingCartProvider>
    </div>
  );
};

export default App;
