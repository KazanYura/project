import React, { PureComponent } from 'react';
import {
  ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip, Cell,Legend, ZAxis
} from 'recharts';
const TypeToColor  = {
    "Normal":"#A8A77A",
    "Fire":  "#EE8130",
    "Water":  "#6390F0",
    "Electric":  "#F7D02C",
    "Grass":  "#7AC74C",
    "Ice":  "#96D9D6",
    "Fighting":  "#C22E28",
    "Poison":  "#A33EA1",
    "Ground":  "#E2BF65",
    "Flying":  "#A98FF3",
    "Psychic":  "#F95587",
    "Bug":  "#A6B91A",
    "Rock":  "#B6A136",
    "Ghost":  "#735797",
    "Dragon":  "#6F35FC",
    "Dark":  "#705746",
    "Steel":  "#B7B7CE",
    "Fairy":  "#D685AD", 
}
export default class BubbleChart extends PureComponent {
    static jsfiddleUrl = 'https://jsfiddle.net/alidingling/9Lfxjjty/';
  
    render() {
        let data_import = JSON.parse(localStorage.getItem('data'));
        let type_to_stats = [];
            Object.entries(data_import).forEach(element => {
                let found = false;
                for (let index = 0; index < type_to_stats.length; index++) {
                    let e = type_to_stats[index];
                    if (e.type === element[1]["type_1"]){
                        e.spa += parseInt(element[1]["sp_attack"]);
                        e.a += parseInt(element[1]["attack"]);
                        e.speed += parseInt(element[1]["speed"]);
                        e.def += parseInt(element[1]["defense"])
                        e.spdef += parseInt(element[1]["sp_defense"])
                        e.c += 1;
                        found = true;
                        break;
                    }
                    
                }
                if (!found){
                    type_to_stats.push({type:element[1]["type_1"],spa:parseInt(element[1]["sp_attack"]),a:parseInt(element[1]["attack"]),speed:parseInt(element[1]["speed"]),c:1,spdef:parseInt(element[1]["sp_defense"]),def:parseInt(element[1]["defense"])})
                }

        });
        console.log(type_to_stats)
        for (let index = 0; index < type_to_stats.length; index++) {
            const element = type_to_stats[index];
            element.spa = (element.spa / element.c);
            element.a = (element.a / element.c);
            element.def = (element.def / element.c);
            element.spdef = (element.spdef / element.c);
            element.speed = (element.speed / element.c);
            
        }
      return (
          <div className="chart_holder_edit">

             <div>
               <h3>Характеристика - Атака</h3>
        <ScatterChart
          width={400}
          height={400}
          margin={{
            top: 20, right: 20, bottom: 20, left: 20,
          }}
        >
          <CartesianGrid />
          <XAxis type="number" dataKey="a" name="Attack"/>
          <YAxis type="number" dataKey="speed" name="Speed"/>
          <ZAxis type="category" dataKey="type" name="Type"/>
          <Tooltip cursor={{ strokeDasharray: '3 3' }}  />
          <Scatter data={type_to_stats} fill="#8884d8">
            {
              type_to_stats.map((entry, index) => <Cell key={`cell-${index}`} fill={TypeToColor[entry.type]} />)
            }
          </Scatter>
        </ScatterChart>
        </div>
        <div>
          <h3>
            Характеристика - Спец. Атака
          </h3>
        <ScatterChart
          width={400}
          height={400}
          margin={{
            top: 20, right: 20, bottom: 20, left: 20,
          }}
        >
          <CartesianGrid />
          <XAxis type="number" dataKey="spa" name="Special Attack"/>
          <YAxis type="number" dataKey="speed" name="Speed"/>
          <ZAxis type="category" dataKey="type" name="Type"/>
          <Tooltip cursor={{ strokeDasharray: '3 3' }}  />
          <Scatter data={type_to_stats} fill="#8884d8">
            {
              type_to_stats.map((entry, index) => <Cell key={`cell-${index}`} fill={TypeToColor[entry.type]} />)
            }
          </Scatter>
        </ScatterChart>
        </div>
        <div>
          <h3>
            Характеристика - Захист
          </h3>

        <ScatterChart
          width={400}
          height={400}
          margin={{
            top: 20, right: 20, bottom: 20, left: 20,
          }}
        >
          <CartesianGrid />
          <XAxis type="number" dataKey="def" name="Defense"/>
          <YAxis type="number" dataKey="speed" name="Speed"/>
          <ZAxis type="category" dataKey="type" name="Type"/>
          <Tooltip cursor={{ strokeDasharray: '3 3' }}  />
          <Scatter data={type_to_stats} fill="#8884d8">
            {
              type_to_stats.map((entry, index) => <Cell key={`cell-${index}`} fill={TypeToColor[entry.type]} />)
            }
          </Scatter>
        </ScatterChart>
        </div>
        <div>
          <h3>Характеристика - Спец. Захист</h3>
        <ScatterChart
          width={400}
          height={400}
          margin={{
            top: 20, right: 20, bottom: 20, left: 20,
          }}
        >
          <CartesianGrid />
          <XAxis type="number" dataKey="spdef" name="Special Defense"/>
          <YAxis type="number" dataKey="speed" name="Speed"/>
          <ZAxis type="category" dataKey="type" name="Type"/>
          <Tooltip cursor={{ strokeDasharray: '3 3' }}  />
          <Scatter data={type_to_stats} fill="#8884d8">
            {
              type_to_stats.map((entry, index) => <Cell key={`cell-${index}`} fill={TypeToColor[entry.type]} />)
            }
          </Scatter>
        </ScatterChart>
        </div>
        </div>
      );
    }
  }
  