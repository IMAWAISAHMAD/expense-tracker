import React from 'react';
import Header from './components/Header';
import Transactions from './components/Transactions';
import {AppProvider} from './context/AppContext'



function App() {
  return (
   <AppProvider>
      <Header/>
      <Transactions/>
   </AppProvider>
  );
}

export default App;
