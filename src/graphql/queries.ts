// third-partry libraries
import { gql } from '@apollo/client';

/**
 * @desc Gets all products
 */
export const GET_PRODUCTS = gql`
  query {
    products{
      id
      title
      image_url
      price(currency:USD)
    }
  }`; 