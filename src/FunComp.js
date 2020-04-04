import React, { useEffect, useState } from "react";
import User from "./User";
import "./App.css";

const FunComponent = () => {
  const [state, setState] = useState(null);

  useEffect(() => {
    parseData();
  }, []);

  const parseData = async () => {
    const data = await fetch("data.json");
    const response = await data.json();
    console.log(response);
    setState(response);
  };

  if (!state) return null;
  return (
    <div className="app">
      <h2>Users</h2>
      <div className="users">
        {state.map(user => (
          <User key={user.id} user={user} />
        ))}
      </div>
    </div>
  );
};

export default FunComponent;
