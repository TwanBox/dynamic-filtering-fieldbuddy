import React, { useContext } from 'react';
import { StoreContext } from '../stores/OrdersStore';
import filterConfig from '../data/filtterConfig.json';
import './css/FilterButton.css';

const FilterDropdown = () => {
  const store = useContext(StoreContext);
  const { typeOne, typeTwo, typeThree, display } = filterConfig.filterByType;

  const handleToggle = (e) => {
    if (e.target.value !== 'TYPE') {
      store.setFilterCategory('Type');
      store.setFilterTerm(e);
    } else {
      store.removeFilter();
      store.removeFilterCategory();
    }
  };

  return (
    display ?
    <div className="filterDropdown">
      <select className="filterButton__dropdown" onChange={(e) => handleToggle(e)}>
        <option>TYPE</option>
        <option value={typeOne}>{typeOne}</option>
        <option value={typeTwo}>{typeTwo}</option>
        <option value={typeThree}>{typeThree}</option>
      </select>
    </div>
    : ''
  );
};

export default FilterDropdown;