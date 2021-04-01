import React from 'react';

const dbContext = React.createContext({

    item: null,
    setItems: () => {},

})
 export const DataStoreProvider = dbContext.Provider

export default dbContext;