// react libraries
import * as React from "react";

// components
import ProductListingPage from './productListingPage/ProductListPage';

// interface
interface Props {}

/**
 * @desc App
 */
const App: React.FC<Props> = () => {
  return (
    <div>
      <ProductListingPage />
    </div>
  );
};

export default App;
