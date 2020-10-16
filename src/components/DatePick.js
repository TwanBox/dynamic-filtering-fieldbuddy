import React, { useState, useContext } from 'react'
import { DateRange } from 'react-date-range';
import { StoreContext } from '../stores/OrdersStore';
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import './css/DatePick.css'

function DatePick() {
  const store = useContext(StoreContext);
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  const selectionRange = {
    startDate: startDate,
    endDate: endDate,
    key: "selection"
  };

  function handleSelect(ranges) {
    setStartDate(ranges.selection.startDate);
    setEndDate(ranges.selection.endDate);
  };

  return (
    store.dateActive ?
    <div className="datePick">
      <DateRange
        ranges={[selectionRange]}
        onChange={handleSelect}
        rangeColors={["#00b7f4"]}
      />
      <button
        className="datePick__btn"
        onClick={() => {
          store.setDateActive();
          store.setFilterStartDate(startDate);
          store.setFilterEndDate(endDate);
          store.filterByDate();
        }}
      >
        SET DATE RANGE
      </button>
    </div>
    : <div className="datePick__dateRange">
        <h5>Applied Date Range</h5>
        <div>
        <span>{store.filterStartDate.toString().slice(4, 15)} / </span>
        <span>{store.filterEndDate.toString().slice(4, 15)}</span>
        </div>
      </div>
  );
};

export default DatePick;
