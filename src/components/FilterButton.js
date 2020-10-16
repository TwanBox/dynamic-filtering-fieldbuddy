import React, { useContext, useState } from 'react';
import { observer } from 'mobx-react';
import { StoreContext } from '../stores/OrdersStore';
import './css/FilterButton.css';

const FilterButton = observer(({ filterType, category }) => {
  const [active, setActive] = useState(false);
  const store = useContext(StoreContext);

  const handleToggle = () => {
    setActive(!active);
    if (!active) {
      if (category === 'Multi') {
        store.setDisplayMulti();
      } else {
        category in store.filters
        ? store.filters[category].push(filterType)
        : store.filters[category] = [filterType];
      }
    } else {
      if (category === 'Multi') {
        store.setDisplayMulti();
      } else {
        if (store.filters[category].length === 1) {
          delete store.filters[category]
        } else {
          let i = store.filters[category].indexOf(filterType);
          store.filters[category].splice(i, 1);
        }
      }
    }
  };

  return (
    <div className="filterButton">
      <button
        value={filterType}
        className={ !active ? "filterButton__btn" : "filterButton__btnActive" }
        onClick={() => handleToggle()}
      >
        {filterType.toUpperCase()}
      </button>
    </div>
  );
});

export default FilterButton;