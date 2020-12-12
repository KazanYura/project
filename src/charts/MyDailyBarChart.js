import React from "react";
import {
        BarChart, 
        Bar, 
        Cell, 
        XAxis, 
        YAxis, 
        CartesianGrid, 
        Tooltip, 
        Legend,
        } from 'recharts';


let t_nuclear = 0,t_thermal = 0,t_renewable = 0,t_heat_power = 0,t_hydro = 0,t_pumped_hydro  = 0;
class MyDailyBarChart extends React.Component{
    render(){
      let data = [];
      let founded = false;
      let current_time;
      let counter = 1;
        let data_import = JSON.parse(localStorage.getItem('data'));
        Object.entries(data_import).forEach(element => {
            for (let i = 0; i < data.length; i++){
                if (data[i].name === current_time){
                    data[i].Nuclear += parseInt(element[1][1]);
                    data[i].Thermal += parseInt(element[1][2]);
                    data[i].Renewable += parseInt(element[1][3]);
                    data[i].Heat_Power += parseInt(element[1][4]);
                    data[i].Hydro += parseInt(element[1][5]);
                    data[i].Pumped_Hydro += parseInt(element[1][6]);
                    counter += 1;
                    founded = true;
                    break;
                }
            }
            if (!founded){
            data.push({name: current_time,
                       Nuclear:t_nuclear,
                       Thermal:t_thermal,
                       Renewable:t_renewable,
                       Heat_Power: t_heat_power,
                       Hydro: t_hydro,
                       Pumped_Hydro: t_pumped_hydro});
            }
            t_nuclear = 0;
            t_thermal = 0;
            t_renewable = 0;
            t_heat_power = 0;
            t_hydro = 0;
            t_pumped_hydro  = 0;
            founded = false;
            current_time = element[1][0].split(' ')[1].split(':')[0];
          }
      );
      data = data.reverse();
      data.pop();
      for (let i = 0; i < data.length; i++){
        data[i].Nuclear /= counter;
        data[i].Thermal /= counter;
        data[i].Renewable /= counter;
        data[i].Heat_Power /= counter;
        data[i].Hydro /= counter;
        data[i].Pumped_Hydro /= counter;
      }
        return (
          <BarChart
            width={1200}
            height={600}
            data={data}
            margin={{
              top: 20, right: 30, left: 20, bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="Nuclear" stackId="a" fill="#0088AA" />
            <Bar dataKey="Thermal" stackId="a" fill="#00C49F" />
            <Bar dataKey="Renewable" stackId="a" fill="#FFBB28" />
            <Bar dataKey="Heat_Power" stackId="a" fill="#FF8042" />
            <Bar dataKey="Hydro" stackId="a" fill="#AAFF88" />
            <Bar dataKey="Pumped_Hydro" stackId="a" fill="#28BBFF" />
          </BarChart>
        );
      }
}
export default MyDailyBarChart;