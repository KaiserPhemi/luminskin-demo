// react libraries
import React from "react";

// third-party libraries
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

// Configure enzyme for react 16
Enzyme.configure({ adapter: new Adapter() });

// component
import NavigationBar from '../NavigationBar';

// test suite
describe("Navigation Bar", () => {
  const props = {
    handleSideBar: () => {},
  };
  const component = shallow(<NavigationBar {...props} />);
  it("should render component", () => {
    expect(component.exists()).toBe(true);
    expect(component.find(".main-header").length).toEqual(1);
    expect(component.find(".logo-wrapper").length).toEqual(1);
    expect(component.find("ul").length).toEqual(1);
    expect(component.find("li").length).toEqual(2);
  });
});
