import React, { createContext } from 'react';
import { useLocalObservable } from 'mobx-react';

export const StoreContext = createContext();

const StoreProvider = ({children}) => {
  const store = useLocalObservable(() => ({
    filterCategory: '',
    filterTerm: '',
    displayMulti: false,
    selectedFilters: {
      statuses : [],
      colors : [],
      types : []
    },
    orders: [
      {
        "Id": "uniqwo1",
        "Name": "WO-0001",
        "Status": "Open",
        "Type": "Installation",
        "StartDate": "22-04-2016 13:00:00",
        "EndDate": "22-04-2016 14:00:00",
        "Color": "Red",
        "Description": "Install new KoelKast SF-123"
      },
      {
        "Id": "uniqwo2",
        "Name": "WO-0002",
        "Status": "In Progress",
        "Type": "Maintenance",
        "StartDate": "22-04-2016 14:00:00",
        "EndDate": "22-04-2016 15:00:00",
        "Color": "Green",
        "Description": "Check freon on split-system"
      },
      {
        "Id": "uniqwo3",
        "Name": "WO-0003",
        "Status": "Open",
        "Type": "Malfunction",
        "StartDate": "23-04-2016 12:00:00",
        "EndDate": "23-04-2016 13:30:00",
        "Color": "Blue",
        "Description": "see what's going on with the boiler"
      },
      {
        "Id": "uniqwo4",
        "Name": "WO-0004",
        "Status": "Closed",
        "Type": "Installation",
        "StartDate": "24-04-2016 16:00:00",
        "EndDate": "24-04-2016 17:30:00",
        "Color": "Blue",
        "Description": "Install some stuff"
      },
      {
        "Id": "uniqwo5",
        "Name": "WO-0005",
        "Status": "Open",
        "Type": "Installation",
        "StartDate": "25-04-2016 12:00:00",
        "EndDate": "25-04-2016 13:30:00",
        "Color": "Green",
        "Description": "you got this!"
      },
      {
        "Id": "uniqwo6",
        "Name": "WO-0006",
        "Status": "Open",
        "Type": "Installation",
        "StartDate": "26-04-2016 14:00:00",
        "EndDate": "26-04-2016 14:30:00",
        "Color": "Red",
        "Description": "intall a brand new cupboard"
      },
      {
        "Id": "uniqwo7",
        "Name": "WO-0007",
        "Status": "Open",
        "Type": "Installation",
        "StartDate": "27-04-2016 15:00:00",
        "EndDate": "27-04-2016 15:30:00",
        "Color": "Green",
        "Description": "closed - we installed something for them"
      }
    ],
    setDisplayMulti:(e) => {
      store.displayMulti = !store.displayMulti;
    },
    setFilterCategory:(filterType) => {
      store.filterCategory = filterType;
    },
    removeFilterCategory: () => {
      store.filterCategory = ''
    },
    setFilterTerm:(e) => {
      store.filterTerm = e.target.value;
    },
    removeFilter: () => {
      store.filterTerm = ''
    },
    get storeCount() {
      return store.orders.length
    },
    get filtered() {
      const { statuses, colors, types } = store.selectedFilters;

      const filteredOrders = store.orders.filter(({ Status, Color, Type }) => {
      if(statuses.length > 0 && colors.length > 0 && types.length > 0) {
        return statuses.includes(Status) && colors.includes(Color) && types.includes(Type)
      } else if (statuses.length > 0 && colors.length === 0 && types.length === 0) {
        return statuses.includes(Status) 
      } else if (statuses.length === 0 && colors.length > 0 && types.length === 0) {
        return colors.includes(Color)
      } else if (types.length > 0 && colors.length === 0 && statuses.length === 0) {
        return types.includes(Type)
      } else if (types.length > 0 && colors.length === 0 && statuses.length > 0) {
        return types.includes(Type) && statuses.includes(Status)
      } else if (types.length > 0 && colors.length > 0 && statuses.length === 0) {
        return types.includes(Type) && colors.includes(Color)
      } else if (types.length === 0 && colors.length > 0 && statuses.length > 0) {
        return statuses.includes(Status) && colors.includes(Color)
      } else {
        return statuses.includes(Status) || colors.includes(Color) || types.includes(Type)
      }
    });

    return filteredOrders;
    },
  }));

  return (
    <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
  )
}

export default StoreProvider;