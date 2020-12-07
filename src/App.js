import React from "react";
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";

import Home from './components/Home';
import GlobalView from './components/GlobalView';
import DailyView from './components/DailyView';
import CustomView from './components/CustomView';
import {useEffect} from 'react';
import { csv } from "d3-fetch";

let old_keys = ["datetime","production_nuclear","production_thermal","production_renewable","production_heat_power","production_hydro","production_pumped_hydro","consumption_total"]
function App() {
  useEffect(() => {
    csv(process.env.PUBLIC_URL + `/electricity.csv`).then((data) => {
      let earray = {}
      for (let j = 0; j < data.length; j++){
        let o = data[j];
        let edata = []
      for (let i = 0; i < old_keys.length; i++){
        edata.push(o[old_keys[i]]);
      }
      earray[j] = edata;
    }
      if (localStorage.getItem("data") === null){
        localStorage.clear();
        localStorage.setItem("data",JSON.stringify(earray));
      }
  });
  });
  return (
    <HashRouter>
        <div>
          <h1>Ukrainian Energy Statistic</h1>
          <ul className="header">
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/global">Global page</NavLink></li>
            <li><NavLink to="/daily">Daily page</NavLink></li>
            <li><NavLink to="/custom">Custom page</NavLink></li>
          </ul>
          <div className="content">
            <Route exact path="/" component={Home}/>
            <Route path="/global" component={GlobalView}/>
            <Route path="/daily" component={DailyView}/>
            <Route path="/custom" component={CustomView}/>
          </div>
        </div>
      </HashRouter>
  );
}

export default App;
