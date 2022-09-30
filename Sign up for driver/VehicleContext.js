import React, {createContext, useContext, useState} from 'react';

const VehicleContext = createContext();

export default function VehicleContextProvider({children}) {
  const [data, setData] = useState({});

  console.log(data);

  return (
    <VehicleContext.Provider value={{data, setData}}>{children}</VehicleContext.Provider>
  );
}

export function useVehicleContext() {
  return useContext(VehicleContext);
}
