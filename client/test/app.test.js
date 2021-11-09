import React from "react";
import ReactDom from "react-dom";
import App from "../src/App";

describe("App", () => {
  let container;
  beforeEach(() => {
    container = document.createElement("div");
  });

  const render = (component) => ReactDom.render(component, container);
  const element = (elementClass) => container.querySelector(`.${elementClass}`);
  it("Should render Navbar Component", () => {
    render(<App />);
    expect(element("navbar")).not.toBeNull();
  });
});
