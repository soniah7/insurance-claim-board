import { shallow } from "enzyme";
import React from "react";
import { ClaimRow } from "../../components/claim-table/claim-row";
import Database from "../../service/database.json";
import "../setupTests";

describe("Claim Table Row", () => {
  let claim;

  const selectors = {
    tableRow: ".table__content--row",
  };

  beforeEach(() => {
    claim = Database.claims[0];
  });

  it("renders correct number of fields for each claim", () => {
    let wrapper = shallow(<ClaimRow {...claim} />);
    expect(wrapper.find(selectors.tableRow).find("div").children().length).toBe(
      7
    );
  });

  it("renders id, status, assignee and claimant of the claim correctly", () => {
    let wrapper = shallow(<ClaimRow {...claim} />);
    expect(wrapper.find(selectors.tableRow).childAt(0).text()).toBe("1");
    expect(wrapper.find(selectors.tableRow).childAt(1).text()).toBe("received");
    expect(wrapper.find(selectors.tableRow).childAt(2).text()).toBe(
      "John Smith"
    );
    expect(wrapper.find(selectors.tableRow).childAt(3).text()).toBe(
      "Skylar Dean"
    );
  });

  it("displays time in readable format for each claim", () => {
    let wrapper = shallow(<ClaimRow {...claim} />);
    expect(wrapper.find(selectors.tableRow).childAt(4).text()).toBe(
      "2020-08-09 10:00"
    );
    expect(wrapper.find(selectors.tableRow).childAt(5).text()).toBe(
      "2020-08-09 10:00"
    );
  });

  it("generates correct next best action based on relevant information of the claim", () => {
    let wrapper = shallow(<ClaimRow {...claim} />);
    expect(wrapper.find(selectors.tableRow).childAt(6).text()).toBe(
      "Did not exceed SLA hours"
    );
  });
});
