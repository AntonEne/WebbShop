import logo from './logo.svg';
import './App.css';
import ItemInput from './components/ItemInput';
import React from 'react';
import {DataStoreProvider} from "./context/dbContext"
import InventoryList from './components/InventoryList';

function App() {
  
  return (
    <DataStoreProvider>
       <ItemInput></ItemInput>
       <InventoryList></InventoryList>
    </DataStoreProvider>
  );
}

export default App;
