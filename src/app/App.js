import React from 'react'
import { Route,Routes } from 'react-router-dom';
import {Main} from "../pages"
import './App.scss';


const App =()=> {
  return (
    <div className="app">
        <Routes>
          <Route path="/chainer" element={<Main />} />
        </Routes>
    </div>
  );
}

export default App;
