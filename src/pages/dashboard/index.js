import React, { useState, useEffect } from "react";
import { reqClaimList } from "../../service/data-service";
import { displayDateAndTime } from "../../utils/data-formatter";
import { calculateNextBestAction } from "../../service/next-best-action-calculator";

export const Dashboard = () => {
  const [claimList, setClaimList] = useState([]);

  useEffect(() => {
    async function fetchData() {
      let data = [];
      try {
        data = await reqClaimList();
        setClaimList(data);
      } catch (e) {
        alert(e);
      }
    }
    fetchData();
  });

  return (
    <div className="dashboard">
      <div>Claim Dashboard</div>
      <div className="dashboard__table">
        <div className="dashboard__table--header">
          <span>Id</span>
          <span>Status</span>
          <span>Assignee</span>
          <span>Claimant</span>
          <span>Created Time</span>
          <span>Updated Time</span>
          <span>Next Best Action</span>
        </div>
        {claimList.map((claim) => (
          <div>
            <span>{claim.id}</span>
            <span>{claim.status}</span>
            <span>{claim.assignedTo}</span>
            <span>{displayDateAndTime(claim.createdAt)}</span>
            <span>{displayDateAndTime(claim.updatedAt)}</span>
            <span>{calculateNextBestAction(claim)}</span>
          </div>
        ))}
      </div>
    </div>
  );
};
