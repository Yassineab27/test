import React from "react";

const User = props => {
  const { name, sites, type, status } = props.user;
  return (
    <div className="user">
      <h3>{name}</h3>
      <p>Sites: {sites}</p>
      <p>Type: {type}</p>
      <p style={{ color: status === "enable" ? "green" : "red" }}>{status}</p>
    </div>
  );
};

export default User;
