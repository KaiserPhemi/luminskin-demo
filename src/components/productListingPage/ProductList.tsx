// react libraries
import * as React from "react";

import { useQuery } from "@apollo/client";

// components
import ProductListItem from "./ProductListItem";

// graphql queries
import { GET_PRODUCTS } from "../../graphql/queries";
/**
 * @desc Displays list of items on page
 * @author Oluwafemi Akinwa
 */
const ProductList = () => {
  const [productList, setProductList] = React.useState([]); 
  const { error, loading, data } = useQuery(GET_PRODUCTS);

  /**
   * @desc Makes API call for all products
   * @author Oluwafemi Akinwa
   */
  React.useEffect(() => {
    if (data) {
      setProductList(data.products);
    }
  }, [data]);

  return (
    <div className='product-list-grid'>
      {productList &&
        productList.map((item:  any, index) => (
          <ProductListItem
            key={item.id}
            productName={item.title}
            productPrice={item.price}
            imgURL={item.image_url}
          />
        ))}
    </div>
  );
};

export default ProductList;
