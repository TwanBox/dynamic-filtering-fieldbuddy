import React, { useContext } from 'react';
import FilterButton from './FilterButton';
import FilterRadio from './FilterRadio';
import DatePick from './DatePick';
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
      {
        store.displayMulti &&
        <div className="filterMulti">
          <FilterRadio />
          <div className="filterMulti__filterRow">
          <FilterButton  filterType="Open" category={statusCategory} />
          <FilterButton  filterType="Closed" category={statusCategory} />
          <FilterButton  filterType="In Progress" category={statusCategory} />
          </div>
          <div className="filterMulti__filterRow">
            <FilterButton  filterType="Blue" category={colorCategory} />
            <FilterButton  filterType="Green" category={colorCategory} />
            <FilterButton  filterType="Red" category={colorCategory} />
          </div>
          <DatePick />
        </div>
      }
    </div>
  );
});

export default FilterMulti;