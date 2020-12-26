import React from "react";
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";

import Home from './components/Home';
import {useEffect} from 'react';
import { csv } from "d3-fetch";
import PokedexBasic from "./components/PokedexBasic";
import Legendary from "./components/Legendary";
import NewLeg from "./components/NewLeg";

function App() {
  useEffect(() => {
    csv(process.env.PUBLIC_URL + `/pokedex.csv`).then((data) => {
      if (localStorage.getItem("data") !== null){
        localStorage.clear();
        localStorage.setItem("data",JSON.stringify(data));
      }
  });
  });
  return (
    <HashRouter>
        <div>
          <h1>Pokemon Visual World</h1>
          <ul className="header">
            <li><NavLink to="/">Домашня сторінка</NavLink></li>
            <li><NavLink to="/pokedex_basic">Pokedex</NavLink></li>
            <li><NavLink to="/types_compare">Порівняння типів</NavLink></li>
            <li><NavLink to="/legendary">Легендарність</NavLink></li>
          </ul>
          <div className="content">
            <Route exact path="/" component={Home}/>
            <Route path="/pokedex_basic" component={PokedexBasic}/>
            <Route path="/types_compare" component={Legendary}/>
            <Route path="/legendary" component={NewLeg}/>
          </div>
        </div>
      </HashRouter>
  );
}

export default App;
