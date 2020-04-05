import React, { useState, useEffect } from "react";

const Search = (props) => {
  const [search, setSearch] = useState("");

  useEffect(() => {
    props.onSearch(search);
  }, [search]);

  return (
    <div className="search">
      {search ? null : <i className="fas fa-search search-icon"></i>}
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </div>
  );
};

export default Search;
