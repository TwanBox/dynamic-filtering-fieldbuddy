import React, { useContext } from 'react';
import FilterButton from './FilterButton';
import FilterRadio from './FilterRadio';
import { observer } from 'mobx-react';
  import { StoreContext } from '../stores/OrdersStore';
  import filterConfig from '../data/filterConfig.json';
import './css/FilterMulti.css';

const FilterMulti = observer(() => {
  const store = useContext(StoreContext);
  const { statusCategory } = filterConfig.filterByStatus;
  const { colorCategory } = filterConfig.filterByColor;

  return (
    <div>
    {store.displayMulti
      ? <div className="filterMulti">
          <FilterRadio />
          <FilterButton  filterType="Open" category={statusCategory} />
          <FilterButton  filterType="Closed" category={statusCategory} />
          <FilterButton  filterType="In Progress" category={statusCategory} />
          <FilterButton  filterType="Blue" category={colorCategory} />
          <FilterButton  filterType="Green" category={colorCategory} />
          <FilterButton  filterType="Red" category={colorCategory} />
          <FilterButton  filterType="EndDate <" category="Date" />
          <FilterButton  filterType="After 24th" category="ADate" />
        </div>
      : ""
    }
    </div>
  );
});

export default FilterMulti;