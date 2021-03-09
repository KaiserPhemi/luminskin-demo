// react libraries
import React from "react";

// third-party libraries
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

// Configure enzyme for react 16
Enzyme.configure({ adapter: new Adapter() });

// component
import DefaultButton from '../DefaultButton'

// test suite
describe("Default Button", () => {
  const defaultProps = {
    buttonText: "",
    onClick: () => {},
  };
  const component = shallow(<DefaultButton {...defaultProps} />);
  it("should render component", () => {
    expect(component.exists()).toBe(true);
    expect(component.find(".default-btn").length).toEqual(1);
    expect(component.find("button").length).toEqual(1);
  });
});
