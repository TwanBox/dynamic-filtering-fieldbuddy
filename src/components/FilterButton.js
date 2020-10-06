import React, { useContext, useState } from 'react';
import { observer } from 'mobx-react';
import { StoreContext } from '../stores/OrdersStore';
import './css/FilterButton.css';

const FilterButton = observer(({ filterType, category }) => {
  const [active, setActive] = useState(false);
  const store = useContext(StoreContext);

  const handleToggle = (e) => {
    setActive(!active);
    if (!active) {
      if (category === 'Multi') store.setDisplayMulti()
      if (category === 'Status') store.selectedFilters.statuses.push(e.target.value);
      if (category === 'Color') store.selectedFilters.colors.push(e.target.value);
      store.setFilterCategory(category);
      store.setFilterTerm(e);
    } else {
      if (category === 'Multi') store.setDisplayMulti()
      if (category === 'Status') store.selectedFilters.statuses = [];
      if (category === 'Color') store.selectedFilters.colors = [];
      store.removeFilter();
      store.removeFilterCategory();
    }
  };

  return (
    <div className="filterButton">
      <button
        value={filterType}
        className={ !active ? "filterButton__btn" : "filterButton__btnActive" }
        onClick={(e) =>handleToggle(e)}
      >
        {filterType.toUpperCase()}
      </button>
    </div>
  );
});

export default FilterButton;