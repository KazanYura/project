import React, { PureComponent } from 'react';
import {
  PieChart, Pie, Cell, Tooltip, Legend
} from 'recharts';


const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({
  cx, cy, midAngle, innerRadius, outerRadius, percent, index,
}) => {
   const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};
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
export default class LegendToType extends PureComponent {
  static jsfiddleUrl = 'https://jsfiddle.net/alidingling/c9pL8k61/';

  render() {
    let data_import = JSON.parse(localStorage.getItem('data'));
    let legend_to_type = [];
    let found = false;
    Object.entries(data_import).forEach(element => {
        found = false;
        if (element[1]["status"] === "Legendary"){
            for (let index = 0; index < legend_to_type.length; index++) {
                const e = legend_to_type[index];
                if (element[1]["type_1"] === e.name){
                    found = true;
                    e.counter += 1;
                    break;
                }
            }
            if (!found){
                legend_to_type.push({name:element[1]["type_1"],counter:1});
            }
        }
    });
    return (
        <div>
        <h3>Легендарні</h3>
      <PieChart width={500} height={400}>
        <Pie
          data={legend_to_type}
          cx={280}
          cy={200}
          labelLine={false}
          label={renderCustomizedLabel}
          outerRadius={150}
          fill="#8884d8"
          dataKey="counter"
        >
          {
            legend_to_type.map((entry, index) => <Cell key={`cell-${index}`} fill={TypeToColor[entry.name]} />)
          }
        <Legend />
          <Tooltip />

        </Pie>
      </PieChart>
      </div>
    );
  }
}
