import React from "react";
import { displayDateAndTime } from "../../../utils/data-formatter";
import { generateNextBestAction } from "../../../service/next-best-action-generator";

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
      <span>{generateNextBestAction(createdAt, status)}</span>
    </div>
  );
};
