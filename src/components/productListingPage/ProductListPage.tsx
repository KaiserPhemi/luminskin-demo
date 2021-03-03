// react library
import * as React from "react";

// component(s)
import PageBanner from '../banner/ProductPageBanner'

// styles
import './styles.scss';

/**
 * @desc Product listing page
 * @author Oluwafemi Akinwa
 */
const ProductListPage = () => {
  const list = [
    { name: "Age Management Collection", price: 48 },
    { name: "Keratin Collection", price: 18 },
    { name: "Keratin Management", price: 10 },
    { name: "Dark Circle Defence", price: 28 },
  ];

  return (
    <div className="product-list-page">
      <div>
        <PageBanner />
      </div>
      <div>product-list</div>
    </div>
  );
};

export default ProductListPage;
