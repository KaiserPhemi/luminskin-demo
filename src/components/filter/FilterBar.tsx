// react libraries
import * as React from "react";

// styles
import './index.scss';

/**
 * @desc
 */
const FilterBar = () => {
  return (
    <label htmlFor="filter-bar">
      <input className="filter-bar" placeholder="Filter by" />
    </label>
  );
};

export default FilterBar;
