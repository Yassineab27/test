import React, { useEffect, useState } from "react";
import Tool from "./components/Tool";
import Loader from "./components/Loader";
import Search from "./components/Search";
import "./App.scss";

const App = () => {
  const [state, setState] = useState(null);
  const [filtredState, setFiltredState] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [sort, setSort] = useState(null);

  // SORT
  useEffect(() => {
    if (state) {
      // Runs when asc changes && state is true
      const result =
        sort === "asc"
          ? [...state].sort((a, b) => {
              if (a.name.toLowerCase() < b.name.toLowerCase()) return -1;
              if (a.name.toLowerCase() > b.name.toLowerCase()) return 1;
              return 0;
            })
          : [...state].sort((a, b) => {
              if (a.name.toLowerCase() < b.name.toLowerCase()) return 1;
              if (a.name.toLowerCase() > b.name.toLowerCase()) return -1;
              return 0;
            });
      console.log(result);
      setFiltredState(result);
    }
  }, [sort]);

  // Runs only the first time
  useEffect(() => {
    parseData();
  }, []);

  // SET FILTREDSTATE
  useEffect(() => {
    if (state) {
      // Runs when the state changes
      setFiltredState([...state]);
    }
  }, [state]);

  // SEARCH
  useEffect(() => {
    if (state) {
      // Runs when searchTerm changes && state is true
      const result = state.filter((tool) =>
        tool.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFiltredState(result);
    }
  }, [searchTerm]);

  // PARSING JSON DATA
  const parseData = async () => {
    const data = await fetch("data.json");
    const response = await data.json();
    setState(response);
  };

  // headling SearchTerm comming from Search comp.
  const handleSearch = (search) => {
    setSearchTerm(search);
  };

  if (!state) return <Loader />;
  return (
    <div className="app container">
      <h2>Users</h2>
      <Search onSearch={handleSearch} />
      <div className="users">
        <div className="users-header">
          <div className="tool-name">
            <p>Tool name</p>

            <span className="sort-icons">
              <i
                onClick={() => setSort("asc")}
                style={{
                  color:
                    sort === "asc"
                      ? "#00c7a2"
                      : sort === "desc"
                      ? "#ccc"
                      : "#ccc",
                }}
                className="fas fa-arrow-circle-up"
              ></i>
              <i
                onClick={() => setSort("desc")}
                style={{
                  color:
                    sort === "desc"
                      ? "#00c7a2"
                      : sort === "asc"
                      ? "#ccc"
                      : "#ccc",
                }}
                className="fas fa-arrow-circle-down"
              ></i>
            </span>
          </div>

          <p className="used-on">Used on</p>
          <p className="type">Type</p>
          <p className="status">Status</p>
        </div>
        {filtredState.map((user) => (
          <Tool key={user.id} user={user} />
        ))}
      </div>
    </div>
  );
};

export default App;
