import React, { useContext } from 'react';
import { StoreContext } from '../stores/OrdersStore';
import filterConfig from '../data/filterConfig.json';
import './css/FilterButton.css';

const FilterDropdown = () => {
  const store = useContext(StoreContext);
  const { typeOne, typeTwo, typeThree, display } = filterConfig.filterByType;

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
        <option value={typeOne}>{typeOne}</option>
        <option value={typeTwo}>{typeTwo}</option>
        <option value={typeThree}>{typeThree}</option>
      </select>
    </div>
    : ''
  );
};

export default FilterDropdown;