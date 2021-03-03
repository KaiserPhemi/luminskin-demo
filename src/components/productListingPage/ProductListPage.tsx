// react library
import * as React from "react";

// component(s)
import PageBanner from "../banner/ProductPageBanner";
import ProductList from "./ProductList";

// styles
// import './styles.scss';

/**
 * @desc Product listing page
 * @author Oluwafemi Akinwa
 */
const ProductListPage = () => {
  return (
    <div className="product-list-page">
      <div>
        <PageBanner />
      </div>
      <div>
        <ProductList  />
      </div>
    </div>
  );
};

export default ProductListPage;
