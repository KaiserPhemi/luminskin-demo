// react library
import * as React from "react";

// component(s)
import PageBanner from "../banner/ProductPageBanner";
import ProductList from "./ProductList";

// styles
import "./styles.scss";

// interface
interface Props {
  handleSideBar: ()=>any;
}

/**
 * @desc Product listing page
 * @author Oluwafemi Akinwa
 */
const ProductListPage: React.FC<Props> = ({ handleSideBar }) => {
  return (
    <div className="product-list-page">
      <PageBanner />
      <ProductList sideBar={handleSideBar} />
    </div>
  );
};

export default ProductListPage;
