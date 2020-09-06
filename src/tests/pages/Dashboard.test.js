import { shallow } from "enzyme";
import React from "react";
import { Dashboard } from "../../pages/dashboard";
import "../setupTests";

describe("Dashboard", () => {
  const selectors = {
    loadingBar: ".dashboard .dashboard__loading-bar",
    claimTable: ".dashboard .table",
  };

  it("loads bar shows before finishing fetching data", () => {
    const wrapper = shallow(<Dashboard />);
    expect(wrapper.find(selectors.loadingBar));
  });

  it("finishs fetching data in 3 sec and then shows claim table", () => {
    const wrapper = shallow(<Dashboard />);
    setTimeout(() => {
      expect(!wrapper.find(selectors.loadingBar));
      expect(wrapper.find(selectors.claimTable));
    }, 1000);
  });
});
