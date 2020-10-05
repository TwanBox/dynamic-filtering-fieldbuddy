import React, { useContext } from 'react';
import { useObserver } from 'mobx-react';
import { StoreContext } from '../stores/OrdersStore';
import OrderCard from './OrderCard';
import './css/OrderCard.css';

const OrderList = () => {
  const store = useContext(StoreContext);

  return useObserver(() => (
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
  ));
};

export default OrderList;