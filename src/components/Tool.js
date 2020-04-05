import React from "react";

const Tool = (props) => {
  const { name, sites, type, status } = props.user;

  const displayStatus = status === "enable" ? "ON" : "OFF";

  return (
    <div className="user">
      <div className="user-underline"></div>
      <div className="user-info">
        <h3 className="tool-name">{name}</h3>
        <p className="used-on">
          {sites > 1 ? `${sites} sites` : `${sites} site`}
        </p>
        <p className="type">{type}</p>
        <div className="status">
          {status === "blocked" ? (
            <i className="fas fa-lock"></i>
          ) : (
            <p className={`status-${displayStatus}`}>{displayStatus}</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Tool;
