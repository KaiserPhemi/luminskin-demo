// react libraries
import React from "react";

// third-party libraries
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

// Configure enzyme for react 16
Enzyme.configure({ adapter: new Adapter() });

// component
import FilterBar from '../FilterBar';

// test suite
describe("Filter Bar", () => {
  const component = shallow(<FilterBar />);
  it("should render component", () => {
    expect(component.exists()).toBe(true);
    expect(component.find(".filter-bar").length).toEqual(1);
    expect(component.find("input").length).toEqual(1);
  });
});
