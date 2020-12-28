import { max } from 'date-fns';
import React, { PureComponent } from 'react';

import {
  Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis,
} from 'recharts';

export default class RadarStats extends PureComponent {
    static jsfiddleUrl = 'https://jsfiddle.net/alidingling/6ebcxbx4/';  
    render(){
        let pokemon = this.props.pokemon;
      let data = [              
        {field:"HP",value : parseInt(pokemon["hp"])},
        {field:"Attack", value :  parseInt(pokemon["attack"])},
        {field:"Defense",value: parseInt(pokemon["defense"])},
        {field:"Special Attack",value: parseInt(pokemon["sp_attack"])},
        {field:"Special Defense",value: parseInt(pokemon["sp_defense"])},
        {field:"Speed",value: parseInt(pokemon["speed"])}];
        let message = "";
        let stats = [parseInt(pokemon["attack"]), parseInt(pokemon["defense"]),parseInt(pokemon["sp_attack"]),parseInt(pokemon["sp_defense"]) ]
        switch (Math.max(...stats)){
            case parseInt(pokemon["attack"]):
                message = "Pokemon " + pokemon["name"] + " is physical damager";
                break;
            case parseInt(pokemon["defense"]):
                message = "Pokemon " + pokemon["name"] + " is physical tank";
                break;
            case parseInt(pokemon["sp_attack"]):
                message = "Pokemon " + pokemon["name"] + " is special damager";
                break;
            case parseInt(pokemon["sp_defense"]):
                message = "Pokemon " + pokemon["name"] + " is special tank";
                break;
        }
      return (
          <div>
            <h3>{message}</h3>
        <RadarChart cx={400} cy={180} outerRadius={150} width={600} height={450} data={data}>
          <PolarGrid />
          <PolarAngleAxis dataKey="field" />
          <PolarRadiusAxis />
          <Radar dataKey="value" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
        </RadarChart>
        </div>
      );
  }
}