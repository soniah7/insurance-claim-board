import React from "react";
import "./index.scss";

export const Header = ({ headerName }) => {
  return (
    <div className="header">
      <header>{headerName}</header>
    </div>
  );
};
