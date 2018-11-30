import React from 'react';

const SearchBar = ({handleChange, handleSubmit}) => (
  <div>
      <div>
          <input
              type="text"
              id="searchBar"
              placeholder="Enter Zip Code..."
              onChange={handleChange}
          />
      </div>
      <div>
      <button
          className="submit"
          onClick={handleSubmit}>
          Submit
      </button>
      </div>
  </div>
)

export default SearchBar;
