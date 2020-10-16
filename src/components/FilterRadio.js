import React, { useContext } from 'react';
import { StoreContext } from '../stores/OrdersStore';
import filterConfig from '../data/filterConfig.json';

const FilterRadio = () => {
  const store = useContext(StoreContext);
  const { types } = filterConfig.filterByType;

  const handleToggle = (e) => {
    store.filters.Type = e.target.value
  };

  return (
    <div>
      {
        types.map(type => {
          return (
            <div key={type}>
              <input type="radio" name="typeSelect" value={type} onChange={(e) => handleToggle(e)}/>
              <label htmlFor="typeSelect">{type}</label><br></br>
            </div>
          )
        })
      }
    </div>
  )
};

export default FilterRadio;