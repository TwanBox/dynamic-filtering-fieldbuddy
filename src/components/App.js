import React from 'react';
import filterConfig from '../data/filterConfig.json';
import StoreProvider from '../stores/OrdersStore';
import FilterButton from './FilterButton';
import FilterDropdown from './FilterDropdown';
import OrderCount from './OrderCount';
import OrderList from './OrderList';
import FilterMulti from './FilterMulti';
import './css/App.css';
import './css/FilterRow.css';

function App() {
  const { statusType, statusCategory, statusDisplay } = filterConfig.filterByStatus;
  const { colorType, colorCategory, colorDisplay } = filterConfig.filterByColor;
  const { display } = filterConfig.filterMulti;

  return (
    <StoreProvider>
      <div className="App">
        <div className="filterRow">
          { statusDisplay
            ? <FilterButton filterType={statusType} category={statusCategory} />
            : ""
          }
          { colorDisplay
            ? <FilterButton filterType={colorType} category={colorCategory} />
            : ""
          }
          { display
            ? <FilterButton filterType="multi" category="Multi" />
            : ""
          }
          <FilterDropdown />
        </div>
        <OrderCount />
        <FilterMulti />
        <OrderList />
    </div>
    </StoreProvider>
  );
}

export default App;
