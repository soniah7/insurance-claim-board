import React, { useState, useEffect } from "react";
import { reqClaimList } from "../../service/data-service";
import { ClaimTable } from "../../components/claim-table";

export const Dashboard = () => {
  const [claimList, setClaimList] = useState([]);
  const [loadingStatus, setLoadingStatus] = useState(false);
  const attributeList = [
    "Id",
    "Status",
    "Assignee",
    "Claimant",
    "Created Time",
    "Updated Time",
    "Next Best Action",
  ];

  useEffect(() => {
    async function fetchData() {
      let data = [];
      try {
        data = await reqClaimList();
        //to make loading functionality more obvious at development stage
        setTimeout(() => {
          setClaimList(data);
          setLoadingStatus(false);
        }, 300);
      } catch (e) {
        alert(e);
        setLoadingStatus(false);
      }
    }
    setLoadingStatus(true);
    fetchData();
  }, []);

  return (
    <div className="dashboard">
      <div>Claim Dashboard</div>
      {loadingStatus ? (
        "Loading.."
      ) : (
        <ClaimTable claimList={claimList} attributeList={attributeList} />
      )}
    </div>
  );
};
