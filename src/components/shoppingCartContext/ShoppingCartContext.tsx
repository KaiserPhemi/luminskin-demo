// react libraries
import * as React from "react";

// third-party libraries
import { useQuery } from "@apollo/client";

// graphql queries
import { GET_PRODUCTS } from "../../graphql/queries";

/**
 * @desc Context for shopping cart
 * @author Oluwafemi Akinwa
 */
export const ShoppingCartContext = React.createContext<any>(null);

/**
 * @desc Cart provider for the shoppping cart
 * @author Oluwafemi Akinwa
 */
export const ShoppingCartProvider = (props) => {
  const { error, loading, data } = useQuery(GET_PRODUCTS);
  const [productList, setProductList] = React.useState([]);
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

  return (
    <ShoppingCartContext.Provider
      value={{
        productList: [productList, setProductList],
        shoppingCart: [shoppingCart, setShoppingCart],
      }}
    >
      {props.children}
    </ShoppingCartContext.Provider>
  );
};
