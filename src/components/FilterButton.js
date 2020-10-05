import React, { useContext, useState } from 'react';
import { useObserver } from 'mobx-react';
import { StoreContext } from '../stores/OrdersStore';
import './css/FilterButton.css';

const FilterButton = ({ filterType, category }) => {
  const [active, setActive] = useState(false);
  const store = useContext(StoreContext);

  const handleToggle = (e) => {
    setActive(!active);
    if (!active) {
      if (category === "Multi")
      store.setDisplayMulti()
      store.setFilterCategory(category);
      store.setFilterTerm(e);
    } else {
      if (category === "Multi") 
      store.setDisplayMulti()
      store.removeFilter();
      store.removeFilterCategory();
    }
  };

  return useObserver(() => (
    <div className="filterButton">
      <button
        value={filterType}
        className={ !active ? "filterButton__btn" : "filterButton__btnActive" }
        onClick={(e) =>handleToggle(e)}
      >
        {filterType.toUpperCase()}
      </button>
    </div>
  ));
};

export default FilterButton;