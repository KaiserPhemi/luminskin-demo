// react libraries
import * as React from "react";

// components
import ProductListingPage from './productListingPage/ProductListPage';
import NavigationBar from "./navigationBar/NavigationBar";

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
    </div>
  );
};

export default App;
