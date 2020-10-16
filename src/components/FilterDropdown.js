import React, { useContext } from 'react';
import { StoreContext } from '../stores/OrdersStore';
import filterConfig from '../data/filterConfig.json';
import './css/FilterButton.css';

const FilterDropdown = () => {
  const store = useContext(StoreContext);
  const { display, types } = filterConfig.filterByType;

  const handleToggle = (e) => {
    e.target.value !== "noFilter"
    ?  store.filters.Type = e.target.value
    :  delete store.filters.Type;
  };

  return (
    display &&
    <div className="filterDropdown">
      <select className="filterButton__dropdown" onChange={(e) => handleToggle(e)}>
        <option value="noFilter">TYPE</option>
        { types.map(type => <option key={type} value={type}>{type}</option>) }
      </select>
    </div>
  );
};

export default FilterDropdown;