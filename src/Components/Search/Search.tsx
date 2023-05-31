// Search
import React, { useState } from "react";
import styles from "./Search.module.scss";

type TSearch = {
  searchMovies: (str: string, type?: string) => void;
};

const Search = ({ searchMovies }: TSearch) => {
  const [search, setSearch] = useState("");
  const [type, setType] = useState("all");

  const handleKey = (event: { key: string; }) => {
    if (event.key === "Enter") {
      searchMovies(search, type);
    }
  };

  const handleFilter = (event) => {
    const selectedType = event.target.dataset.type;
    setType(selectedType);
    searchMovies(search, selectedType);
  };

  return (
    <div className='row'>
      <div className='col s12'>
        <div className='input-field'>
          <div className={styles.input}>
            <input
              placeholder='search...'
              type='search'
              className='validate'
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              onKeyDown={handleKey}
            />
            <button
              className='btn search-btn #1e88e5 blue darken-1'
              onClick={() => searchMovies(search, type)}
            >
              Search
            </button>
          </div>
          <div className='center-align'>
            <label>
              <input
                className='with-gap #1e88e5 blue darken-1'
                name='type'
                type='radio'
                data-type='all'
                onChange={handleFilter}
                checked={type === "all"}
              />
              <span>All</span>
            </label>
            <label>
              <input
                className='with-gap'
                name='type'
                type='radio'
                data-type='movie'
                onChange={handleFilter}
                checked={type === "movie"}
              />
              <span>Movies only</span>
            </label>
            <label>
              <input
                className='with-gap'
                name='type'
                type='radio'
                data-type='series'
                onChange={handleFilter}
                checked={type === "series"}
              />
              <span>Series only</span>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
