import React from "react";
import { ClaimRow } from "./claim-row";

export const ClaimTable = (props) => {
  const { claimList, attributeList } = props;
  return (
    <div className="claim-table">
      <div className="claim-table__header">
        {attributeList.map((attribute) => (
          <span>{attribute}</span>
        ))}
      </div>
      {claimList.map((claim) => (
        <ClaimRow {...claim} />
      ))}
    </div>
  );
};
