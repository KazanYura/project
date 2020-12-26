import React, { PureComponent } from 'react';
import {
  ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip, Cell, ZAxis
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
        let legen_stats = [];
        let sub_legend_stats = [];
        let normal_stats = [];
        let data_import = JSON.parse(localStorage.getItem('data'));
            Object.entries(data_import).forEach(element => {
                if (element[1]["status"] === "Legendary"){
                    legen_stats.push({height:parseFloat(element[1]["height_m"]),weight:parseFloat(element[1]["weight_kg"]), name: element[1]["name"],type:element[1]["type_1"]})
                }
                if (element[1]["status"] === "Sub Legendary"){
                    sub_legend_stats.push({height:parseFloat(element[1]["height_m"]),weight:parseFloat(element[1]["weight_kg"]), name: element[1]["name"],type:element[1]["type_1"]})
                }
                if (element[1]["status"] === "Normal"){
                    normal_stats.push({height:parseFloat(element[1]["height_m"]),weight:parseFloat(element[1]["weight_kg"]), name: element[1]["name"],type:element[1]["type_1"]})
                }
        });
      return (
          <div className="chart_holder_edit">
              <div>
                  <h3>Легендарні</h3>
        <ScatterChart
          width={400}
          height={400}
          margin={{
            top: 20, right: 20, bottom: 20, left: 20,
          }}
        >
          <CartesianGrid />
          <XAxis type="number" dataKey="height" name="Height" unit="m"/>
          <YAxis type="number" dataKey="weight" name="Weight" unit="kg"/>
          <ZAxis type="category" dataKey="name" name="Name"/>
          <Tooltip cursor={{ strokeDasharray: '3 3' }}  />
          <Scatter data={legen_stats} fill="#8884d8">
            {
              legen_stats.map((entry, index) => <Cell key={`cell-${index}`} fill={TypeToColor[entry.type]} />)
            }
          </Scatter>
        </ScatterChart>
        </div>
        <div>
            <h3>Псевдо-легендарні</h3>
        <ScatterChart
          width={400}
          height={400}
          margin={{
            top: 20, right: 20, bottom: 20, left: 20,
          }}
        >
          <CartesianGrid />
          <XAxis type="number" dataKey="height" name="Height" unit="m"/>
          <YAxis type="number" dataKey="weight" name="Weight" unit="kg"/>
          <ZAxis type="category" dataKey="name" name="Name"/>
          <Tooltip cursor={{ strokeDasharray: '3 3' }}  />
          <Scatter data={sub_legend_stats} fill="#8884d8">
            {
              sub_legend_stats.map((entry, index) => <Cell key={`cell-${index}`} fill={TypeToColor[entry.type]} />)
            }
          </Scatter>
        </ScatterChart>
        </div>
        <div>
            <h3>Звичайні</h3>
        <ScatterChart
          width={400}
          height={400}
          margin={{
            top: 20, right: 20, bottom: 20, left: 20,
          }}
        >
          <CartesianGrid />
          <XAxis type="number" dataKey="height" name="Height" unit="m"/>
          <YAxis type="number" dataKey="weight" name="Weight" unit="kg"/>
          <ZAxis type="category" dataKey="name" name="Name"/>
          <Tooltip cursor={{ strokeDasharray: '3 3' }}  />
          <Scatter data={normal_stats} fill="#8884d8">
            {
              normal_stats.map((entry, index) => <Cell key={`cell-${index}`} fill={TypeToColor[entry.type]} />)
            }
          </Scatter>
        </ScatterChart>
        </div>
        </div>
      );
    }
  }
  