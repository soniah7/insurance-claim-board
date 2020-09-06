import { shallow } from "enzyme";
import React from "react";
import Database from "../../service/database.json";
import { ClaimTable } from "../../components/claim-table";
import "../setupTests";

describe("Claim Table", () => {
  let claimList;
  let attributeList;

  const selectors = {
    table: ".table",
  };

  beforeEach(() => {
    claimList = Database.claims;
    attributeList = [
      "Id",
      "Status",
      "Assignee",
      "Claimant",
      "Created Time",
      "Updated Time",
      "Next Best Action",
    ];
  });

  it("renders correct header in table", () => {
    const wrapper = shallow(
      <ClaimTable claimList={claimList} attributeList={attributeList} />
    );
    expect(wrapper.find(selectors.table).childAt(0).text()).toBe(
      attributeList.join("")
    );
  });

  it("renders correct number of records in table", () => {
    const wrapper = shallow(
      <ClaimTable claimList={claimList} attributeList={attributeList} />
    );
    expect(wrapper.find(selectors.table).childAt(1).children().length).toBe(
      claimList.length
    );
  });
});
