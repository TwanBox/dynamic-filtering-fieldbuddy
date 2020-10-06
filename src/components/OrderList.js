import React, { useContext } from 'react';
import { observer } from 'mobx-react';
import { StoreContext } from '../stores/OrdersStore';
import OrderCard from './OrderCard';
import './css/OrderCard.css';

const OrderList = observer(() => {
  const store = useContext(StoreContext);

  return (
    <div className="orderList">
			{store.filtered.map(({
					Id,
					Name,
					Status,
					Type,
					StartDate,
					EndDate,
					Color,
					Description
				}, i) => <OrderCard 
					key={Id}
					id={Id}
					name={Name}
					status={Status}
					type={Type}
					startDate={StartDate}
					endDate={EndDate}
					color={Color}
					description={Description}
				/>
				)
			}
			</div>
  );
});

export default OrderList;