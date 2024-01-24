import React from "react";

const SearchForm = () => {
  return (
    <form>
      <label htmlFor="search" className="form-group">
        <input type="text" name="search" placeholder="Search or jump to..." />
        <div className="search-bar">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="22"
            height="20"
            className="mr-1 header-search-key-slash"
          >
            <path
              fill="none"
              stroke="#979A9C"
              opacity=".4"
              d="M3.5.5h12c1.7 0 3 1.3 3 3v13c0 1.7-1.3 3-3 3h-12c-1.7 0-3-1.3-3-3v-13c0-1.7 1.3-3 3-3z"
            ></path>
            <path fill="#979A9C" d="M11.8 6L8 15.1h-.9L10.8 6h1z"></path>
          </svg>
        </div>
      </label>
    </form>
  );
};

export default SearchForm;
