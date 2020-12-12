import { PieChart, Pie,Cell, Legend, Tooltip } from 'recharts';
import React from "react";

const COLORS = ['#0088AA', '#00C49F', '#FFBB28', '#FF8042','#AAFF88','#28BBFF'];

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
let t_nuclear = 0,t_thermal = 0,t_renewable = 0,t_heat_power = 0,t_hydro = 0,t_pumped_hydro  = 0;
class MyPieChart extends React.Component{
    render(){
        let data = JSON.parse(localStorage.getItem('data'));
        Object.entries(data).forEach(element => {
            t_nuclear += parseInt(element[1][1]);
            t_thermal += parseInt(element[1][2]);
            t_renewable += parseInt(element[1][3]);
            t_heat_power += parseInt(element[1][4]);
            t_hydro += parseInt(element[1][5]);
            t_pumped_hydro += parseInt(element[1][6]);
        });
        const data01 = [
            { name: 'Nuclear', value: t_nuclear },
            { name: 'Thermal', value: t_thermal },
            { name: 'Renewable', value: t_renewable },
            { name: 'Heat Power', value: t_heat_power },
            { name: 'Hydro', value: t_hydro },
            { name: 'Pumped Hydro', value: t_pumped_hydro }
          ];
        return(                
        <PieChart width={1200} height={600}>
            <Pie
                data={data01}
                cx={600}
                cy={300}
                labelLine={false}
                label={renderCustomizedLabel}
                outerRadius={200}
                fill="#8884d8"
                dataKey="value"
            >
                {
                    data01.map((entry, index) => <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />)
                }
            </Pie>
            <Legend />
            <Tooltip />
        </PieChart>);
    }
}
export default MyPieChart;