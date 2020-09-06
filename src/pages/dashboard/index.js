import React, { useState, useEffect } from "react";
import { reqClaimList } from "../../service/data-service";
import { ClaimTable } from "../../components/claim-table";
import { Header } from "../../components/header";
import "./index.scss";

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
  const headerName = "Insurance Claim Dashboard";

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
      <Header headerName={headerName} />
      {loadingStatus ? (
        <span className="dashboard__loading-bar">Loading..</span>
      ) : (
        <ClaimTable claimList={claimList} attributeList={attributeList} />
      )}
    </div>
  );
};
