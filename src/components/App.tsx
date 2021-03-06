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
  return (
    <ShoppingCartProvider>
        <div>
          <NavigationBar />
          <ProductListingPage />
        </div>
        <ShoppingCartWidget />
    </ShoppingCartProvider>
  );
};

export default App;
