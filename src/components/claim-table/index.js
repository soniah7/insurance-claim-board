import React from "react";
import { ClaimRow } from "./claim-row";
import "./index.scss";

export const ClaimTable = (props) => {
  const { claimList, attributeList } = props;
  return (
    <div className="table">
      <div className="table__header">
        {attributeList.map((attribute, index) => (
          <span key={index}>{attribute}</span>
        ))}
      </div>
      <div className="table__content">
        {claimList.map((claim, index) => (
          <ClaimRow key={index} {...claim} />
        ))}
      </div>
    </div>
  );
};
