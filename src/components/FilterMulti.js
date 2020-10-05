import React, { useContext } from 'react';
import FilterButton from './FilterButton';
import FilterRadio from './FilterRadio';
import { useObserver } from 'mobx-react';
  import { StoreContext } from '../stores/OrdersStore';
  import filterConfig from '../data/filtterConfig.json';
import './css/FilterMulti.css';

function FilterMulti() {
  const store = useContext(StoreContext);
  const { statusCategory } = filterConfig.filterByStatus;

  return useObserver(() => (
    <div>
    {store.displayMulti
      ? <div className="filterMulti">
          <FilterRadio />
          <FilterButton  filterType="Open" category={statusCategory} />
          <FilterButton  filterType="Closed" category={statusCategory} />
          <FilterButton  filterType="In Progress" category={statusCategory} />
          <FilterButton  filterType="EndDate <" category="Date" />
          <FilterButton  filterType="After 24th" category="ADate" />
        </div>
      : ""
    }
    </div>
  ));
}

export default FilterMulti;