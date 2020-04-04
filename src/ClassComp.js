import React from "react";
import User from "./User";

class ClassComp extends React.Component {
  state = {
    users: null
  };

  componentDidMount() {
    this.parseData();
  }

  parseData = async () => {
    const data = await fetch("data.json");
    const response = await data.json();
    console.log(response);
    this.setState({
      users: response
    });
  };

  render() {
    const { users } = this.state;
    if (!users) return null;
    return (
      <div className="app">
        <h2>Users</h2>
        <div className="users">
          {users.map(user => (
            <User key={user.id} user={user} />
          ))}
        </div>
      </div>
    );
  }
}

export default ClassComp;
