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
  const { shoppingCart } = React.useContext(ShoppingCartContext);
  const [cart, setCart] = shoppingCart;
  const [products, setProducts] = productList;

  /**
   * @desc Checks if item is already in the cart
   * @param product
   * @author Oluwafemi Akinwa
   */
  const checkItemInCart = (product: any): any => {
    let checkIndex = cart.findIndex((item) => item.id === product.id);
    if (checkIndex < 0) {
      return false;
    } else {
      return true;
    }
  };

  /**
   * @desc Adds item to cart
   * @param product
   * @author Oluwafemi Akinwa
   */
  const addItemToCart = (product: any) => {
    if (checkItemInCart(product)) {
      const modifiedCart = cart.map((item) => {
        let tempItem = Object.assign({}, item);
        if (tempItem.id === product.id) {
          tempItem.productCount++;
        }
        return tempItem;
      });
      setCart([...modifiedCart]);
    } else {
      setCart((prevCart) => [...prevCart, product]);
    }
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
