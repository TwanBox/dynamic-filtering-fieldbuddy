import React, { useContext } from 'react';
import { useObserver } from 'mobx-react';
import { StoreContext } from '../stores/OrdersStore';
import './css/FilterButton.css';

const OrderCount = () => {
  const store = useContext(StoreContext);

  return useObserver(() => (
    <div className="ordercount">
      {store.filtered.length === 1
        ? <h4>{store.filtered.length} Work Order in Total</h4>
        : <h4>{store.filtered.length} Work Orders in Total</h4>
      }
    </div>
  ));
};

export default OrderCount;