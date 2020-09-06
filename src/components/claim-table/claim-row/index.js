import React from "react";
import { displayDateAndTime } from "../../../utils/data-formatter";
import { calculateNextBestAction } from "../../../service/next-best-action-calculator";

export const ClaimRow = ({
  id,
  status,
  assignedTo,
  claimant,
  createdAt,
  updatedAt,
}) => {
  return (
    <div className="table__content--row">
      <span>{id}</span>
      <span>{status}</span>
      <span>{assignedTo}</span>
      <span>{claimant}</span>
      <span>{displayDateAndTime(createdAt)}</span>
      <span>{displayDateAndTime(updatedAt)}</span>
      <span>{calculateNextBestAction(createdAt, status)}</span>
    </div>
  );
};
