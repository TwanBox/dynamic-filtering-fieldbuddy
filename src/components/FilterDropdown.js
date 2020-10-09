import React, { useContext } from 'react';
import { StoreContext } from '../stores/OrdersStore';
import filterConfig from '../data/filterConfig.json';
import './css/FilterButton.css';

const FilterDropdown = () => {
  const store = useContext(StoreContext);
  const { display, types } = filterConfig.filterByType;

  const handleToggle = (e) => {
    if (store.selectedFilters.types.length === 0) {
      store.selectedFilters.types.push(e.target.value);
    } else if (e.target.value === 'noFilter') {
      store.selectedFilters.types = [];
    } else {
      store.selectedFilters.types[0] = e.target.value;
    }
  };

  return (
    display ?
    <div className="filterDropdown">
      <select className="filterButton__dropdown" onChange={(e) => handleToggle(e)}>
        <option value="noFilter">TYPE</option>
        { types.map(type => <option value={type}>{type}</option>) }
      </select>
    </div>
    : ''
  );
};

export default FilterDropdown;