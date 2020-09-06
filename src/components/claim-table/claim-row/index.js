import React from "react";
import { displayDateAndTime } from "../../../utils/data-formatter";
import { calculateNextBestAction } from "../../../service/next-best-action-calculator";

export const ClaimRow = (props) => {
  const { id, status, assignedTo, createdAt, updatedAt } = props;

  return (
    <div className="claim-table__row">
      <span>{id}</span>
      <span>{status}</span>
      <span>{assignedTo}</span>
      <span>{displayDateAndTime(createdAt)}</span>
      <span>{displayDateAndTime(updatedAt)}</span>
      <span>{calculateNextBestAction(createdAt, status)}</span>
    </div>
  );
};
