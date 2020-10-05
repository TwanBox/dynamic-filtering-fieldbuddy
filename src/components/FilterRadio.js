import React, { useContext } from 'react';
import { StoreContext } from '../stores/OrdersStore';
import filterConfig from '../data/filtterConfig.json';

const FilterRadio = () => {
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
    <div>
      <input type="radio" name="typeSelect" value={typeOne} onChange={(e) => handleToggle(e)} /> {typeOne.toUpperCase()}<br/>
      <input type="radio" name="typeSelect" value={typeTwo} onChange={(e) => handleToggle(e)} /> {typeTwo.toUpperCase()}<br/>
      <input type="radio" name="typeSelect" value={typeThree} onChange={(e) => handleToggle(e)} /> {typeThree.toUpperCase()}
    </div>
    : ''
  );
};

export default FilterRadio;