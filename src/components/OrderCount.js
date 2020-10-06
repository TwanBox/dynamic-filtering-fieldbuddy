import React, { useContext } from 'react';
import { observer } from 'mobx-react';
import { StoreContext } from '../stores/OrdersStore';
import './css/FilterButton.css';

const OrderCount = observer(() => {
  const store = useContext(StoreContext);

  return (
    <div className="ordercount">
      {store.filtered.length === 1
        ? <h4>{store.filtered.length} Work Order in Total</h4>
        : <h4>{store.filtered.length} Work Orders in Total</h4>
      }
    </div>
  );
});

export default OrderCount;