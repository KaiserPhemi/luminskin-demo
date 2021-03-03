// react libraries
import * as React from "react";

// component(s)
import FilterBar from '../filter/FilterBar';

/**
 * @desc Page banner with filter
 * @author Oluwafemi Akinwa
 */
const ProductPageBanner = () => {
  return (
    <div
      className="banner-wrapper"
      style={{
        display: "flex",
        justifyContent: "space-between",
        height: "20vh",
        margin: "5rem 10%",
      }}
    >
      <div
        className="banner-text"
        style={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <span>All Products</span>
        <span>A 360 degree look at Lumin</span>
      </div>
      <div>
        <FilterBar />
      </div>
    </div>
  );
};

export default ProductPageBanner;
