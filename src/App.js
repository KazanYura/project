import React from "react";
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";

import Home from './components/Home';
import DominantReligion from './components/DominantReligion';
import {useEffect} from 'react';
import { csv } from "d3-fetch";
import ChristChange from './components/ChristChange'
import MuslimsPage from "./components/Muslims";
import UnaffiliatedPage from "./components/Unaffiliated";

let old_keys = ["Year","Country","Christians","Muslims","Unaffiliated","Hindus","Buddhists","Folk Religions","Other Religions","Jews","All Religions"]
function App() {
  useEffect(() => {
    csv(process.env.PUBLIC_URL + `/data.csv`).then((data) => {
      let earray = {}
      for (let j = 0; j < data.length; j++){
          let o = data[j];
          let edata = [];
        for (let i = 0; i < old_keys.length; i++){
          edata.push(o[old_keys[i]]);
        }
        earray[j] = edata;
    }
      if (localStorage.getItem("data") !== null){
        localStorage.clear();
        localStorage.setItem("data",JSON.stringify(earray));
      }
  });
  });
  return (
    <HashRouter>
        <div>
          <h1>Візуалізація релігій світу</h1>
          <ul className="header">
            <li><NavLink to="/">Домашня сторінка</NavLink></li>
            <li><NavLink to="/dom">Домінуюча релігія</NavLink></li>
            <li><NavLink to="/mus">Відсоток мусульман</NavLink></li>
            <li><NavLink to="/unaf">Відсоток не афілійованих людей</NavLink></li>
            <li><NavLink to="/ccha">Зміна кількості християн</NavLink></li>
          </ul>
          <div className="content">
            <Route exact path="/" component={Home}/>
            <Route path="/dom" component={DominantReligion}/>
            <Route path="/mus" component={MuslimsPage}/>
            <Route path="/unaf" component={UnaffiliatedPage}/>
            <Route path="/ccha" component={ChristChange}/>
          </div>
        </div>
      </HashRouter>
  );
}

export default App;
