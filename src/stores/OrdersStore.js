import React, { createContext } from 'react';
import { useLocalObservable } from 'mobx-react';

export const StoreContext = createContext();

const StoreProvider = ({children}) => {
  const store = useLocalObservable(() => ({
    filterStartDate: new Date(),
    filterEndDate: new Date(),
    displayMulti: false,
    dateActive: true,
    filters: {},
    orders: [
      {
        "Id": "uniqwo1",
        "Name": "WO-0001",
        "Status": "Open",
        "Type": "Installation",
        "StartDate": "Apr 22 2016 13:00:00",
        "EndDate": "Apr 22 2016 14:00:00",
        "Color": "Red",
        "Description": "Install new KoelKast SF-123"
      },
      {
        "Id": "uniqwo2",
        "Name": "WO-0002",
        "Status": "In Progress",
        "Type": "Maintenance",
        "StartDate": "Apr 22 2016 14:00:00",
        "EndDate": "Apr 22 2016 15:00:00",
        "Color": "Green",
        "Description": "Check freon on split-system"
      },
      {
        "Id": "uniqwo3",
        "Name": "WO-0003",
        "Status": "Open",
        "Type": "Malfunction",
        "StartDate": "Apr 23 2016 12:00:00",
        "EndDate": "Apr 23 2016 13:30:00",
        "Color": "Blue",
        "Description": "see what's going on with the boiler"
      },
      {
        "Id": "uniqwo4",
        "Name": "WO-0004",
        "Status": "Closed",
        "Type": "Installation",
        "StartDate": "Apr 24 2016 16:00:00",
        "EndDate": "Apr 24 2016 17:30:00",
        "Color": "Blue",
        "Description": "Install some stuff"
      },
      {
        "Id": "uniqwo5",
        "Name": "WO-0005",
        "Status": "Open",
        "Type": "Installation",
        "StartDate": "Apr 25 2016 12:00:00",
        "EndDate": "Apr 25 2016 13:30:00",
        "Color": "Green",
        "Description": "you got this!"
      },
      {
        "Id": "uniqwo6",
        "Name": "WO-0006",
        "Status": "Open",
        "Type": "Installation",
        "StartDate": "Apr 26 2016 14:00:00",
        "EndDate": "Apr 26 2016 14:30:00",
        "Color": "Red",
        "Description": "intall a brand new cupboard"
      },
      {
        "Id": "uniqwo7",
        "Name": "WO-0007",
        "Status": "Open",
        "Type": "Installation",
        "StartDate": "Apr 27 2016 15:00:00",
        "EndDate": "Apr 27 2016 15:30:00",
        "Color": "Green",
        "Description": "closed - we installed something for them"
      },
      {
        "Id": "uniqwo8",
        "Name": "WO-0008",
        "Status": "Open",
        "Type": "Test",
        "StartDate": "Apr 22 2016 13:00:00",
        "EndDate": "Apr 22 2016 14:00:00",
        "Color": "Red",
        "Description": "Install new KoelKast SF-123"
      }
    ],
    setFilterStartDate:(date) => {
      store.filterStartDate = date;
    },
    setFilterEndDate:(date) => {
      store.filterEndDate = date;
    },
    setDisplayMulti:() => {
      store.displayMulti = !store.displayMulti;
    },
    setDateActive:() => {
      store.dateActive = false;
    },
    filterOrders: (orders, filters) => orders.filter(order =>
      Object.entries(filters).every(([key, arr]) => arr.includes(order[key]))
    ),
    filterByDate: () => {
      const sd = new Date(store.filterStartDate).getTime();
      const ed = new Date(store.filterEndDate).getTime();
      
      const dateRange = store.orders.filter(order => {
        return new Date(order.StartDate).getTime() >= sd && new Date(order.StartDate).getTime() <= ed
      });
      store.orders = dateRange;
    },
    get filtered() {
      return store.filterOrders(store.orders, store.filters);
    },
  }));

  return (
    <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
  )
}

export default StoreProvider;
