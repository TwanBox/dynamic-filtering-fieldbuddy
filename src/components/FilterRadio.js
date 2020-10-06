import React, { useContext } from 'react';
import { StoreContext } from '../stores/OrdersStore';
import filterConfig from '../data/filterConfig.json';

const FilterRadio = () => {
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
    <div>
      <input type="radio" name="typeSelect" value={typeOne} onChange={(e) => handleToggle(e)} /> {typeOne.toUpperCase()}<br/>
      <input type="radio" name="typeSelect" value={typeTwo} onChange={(e) => handleToggle(e)} /> {typeTwo.toUpperCase()}<br/>
      <input type="radio" name="typeSelect" value={typeThree} onChange={(e) => handleToggle(e)} /> {typeThree.toUpperCase()}
    </div>
  );
};

export default FilterRadio;