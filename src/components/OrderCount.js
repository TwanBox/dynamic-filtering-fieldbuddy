import React, { useContext } from 'react';
import { observer } from 'mobx-react';
import { StoreContext } from '../stores/OrdersStore';
import './css/FilterButton.css';

const OrderCount = observer(() => {
  const store = useContext(StoreContext);
  let plural = store.filtered.length === 1 ? "Order" : "Orders";

  return (
    <div className="ordercount">
      { <h4>{store.filtered.length} Work {plural} in Total</h4> }
    </div>
  );
});

export default OrderCount;