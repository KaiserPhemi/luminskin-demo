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
  const [shoppingCart, setShoppingCart] = React.useState([]);

  /**
   * @desc Makes API call for all products
   * @author Oluwafemi Akinwa
   */
  React.useEffect(() => {
    if (data) {
      setProductList(data.products);
    }
  }, [data]);

  const checkItemInCart = () => {};

  /**
   * @desc
   * @param item
   */
  const addItemToCart = (item: any) => {
    // check the cart
    // if item exist increase number
    // if not add as one
    console.log("The item", item);
  };

  return (
    <div className="product-list-grid">
      {productList &&
        productList.map((item: any, index) => (
          <ProductListItem
            key={item.id}
            productName={item.title}
            productPrice={item.price}
            imgURL={item.image_url}
            item={item}
            addItemHandler={addItemToCart}
          />
        ))}
    </div>
  );
};

export default ProductList;
