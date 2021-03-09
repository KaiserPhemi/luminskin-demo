// react libraries
import React from "react";

// third-party libraries
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

// Configure enzyme for react 16
Enzyme.configure({ adapter: new Adapter() });

// components
import CartItem from '../CartItem';

// test suite
describe("Cart Item", () => {
  const defaultProps = {
    item: {
      productCount: 0,
      image_url: "",
      title: "",
      price: 0,
    },
    handleItemQuantity: () => {},
    handleItemDelete: () => {},
  };
  const component = shallow(<CartItem {...defaultProps} />);
  it("should render component", () => {
    expect(component.exists()).toBe(true);
    expect(component.find(".cart-item-wrapper").length).toBe(1);
  });
});
