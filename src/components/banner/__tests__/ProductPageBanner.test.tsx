// react libraries
import React from "react";

// third-party libraries
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

// Configure enzyme for react 16
Enzyme.configure({ adapter: new Adapter() });

// component
import ProductPageBanner from '../ProductPageBanner';
import FilterBar from '../../filter/FilterBar';

// test suite
describe("Product Page Banner", () => {
  const component = shallow(<ProductPageBanner />);
  const childElement = component.find("FilterBar");

  it("should render page", () => {
    expect(component.exists()).toBe(true);
    expect(component.find(".banner-wrapper").length).toEqual(1);
    expect(component.find("span").length).toEqual(2);
  });

  it("should render child component", () => {
    expect(childElement.length).toBe(1);
    expect(childElement.name()).toBe("FilterBar");
  });
});
