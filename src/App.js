import Header from "./comp/header";
import Home from "./comp/home";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Portfolio from "./comp/portfolio";
import React, { useEffect, useState } from "react";
import { store } from './store'
import { Provider } from 'react-redux'

function App() {

  return (
<Provider store={store}>
   
    <>
     <Router>
        <Routes>
          <Route    path='/' element={<Header /> }>
          <Route   path='/' element={<Home />} />
          <Route   path='/portfolio' element={<Portfolio />} />
          </Route>
        </Routes>
      </Router>
    </>
   
</Provider>
  );
}

export default App;
