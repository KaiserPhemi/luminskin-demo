// react libraries
import * as React from "react";

// component(s)
import FilterBar from '../filter/FilterBar';

// styles
import './banner.scss';

/**
 * @desc Page banner with filter
 * @author Oluwafemi Akinwa
 */
const ProductPageBanner = () => {
  return (
    <div className="banner-wrapper">
      <div className="banner-text">
        <span>All Products</span>
        <span>A 360&#176; look at Lumin</span>
      </div>
      <div>
        <FilterBar />
      </div>
    </div>
  );
};

export default ProductPageBanner;
