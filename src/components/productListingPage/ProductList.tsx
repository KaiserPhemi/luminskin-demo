// react libraries
import * as React from "react";

// context 
import {ShoppingCartContext} from '../shoppingCartContext/ShoppingCartContext'

// components
import ProductListItem from "./ProductListItem";

/**
 * @desc Displays list of items on page
 * @author Oluwafemi Akinwa
 */
const ProductList = () => {
  const { productList } = React.useContext(ShoppingCartContext);
  const [products, setProducts] = productList;

  const checkItemInCart = () => {
    // loop throough cart list
    // check if item is present
    // return true or false
  };

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
      {products &&
        products.map((item: any, index) => (
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
