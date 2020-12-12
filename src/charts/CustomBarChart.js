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


let mountToNamesDict = {1 : "Jan", 2 : "Feb", 3 : "Mar", 4 : "Apr", 5: "May", 6 : "Jun", 7 : "Jul", 8 : "Aug", 9 : "Sep", 10 : "Oct", 11 : "Nov", 12 : "Dec"};
let t_nuclear = 0,t_thermal = 0,t_renewable = 0,t_heat_power = 0,t_hydro = 0,t_pumped_hydro  = 0;
class MyBarChart extends React.Component{
    render(){
        let endDate = new Date(localStorage.getItem('endDate'));
        let startDate = new Date(localStorage.getItem('startDate'));
      let data = [];
      let current_date;
        let data_import = JSON.parse(localStorage.getItem('data'));
        Object.entries(data_import).forEach(element => {
        let d = new Date(element[1][0].split(' ')[0].split('.')[2] + '-' + element[1][0].split(' ')[0].split('.')[1] + '-' + element[1][0].split(' ')[0].split('.')[0]);
        if ((d.getTime() > startDate.getTime()) && (d.getTime() < endDate.getTime())){
            if (!current_date){
                current_date = element[1][0].split(' ')[0].split('.')[2] + '-' + element[1][0].split(' ')[0].split('.')[1] + '-' + element[1][0].split(' ')[0].split('.')[0];
              }
              if (element[1][0].split(' ')[0].split('.')[2] + '-' + element[1][0].split(' ')[0].split('.')[1] + '-' + element[1][0].split(' ')[0].split('.')[0] !== current_date){
                let text_date = current_date.split('-')[2] + " " + mountToNamesDict[parseInt(current_date.split('-')[1])] + " " + current_date.split('-')[0]
                data.push({name: text_date,
                       Nuclear:t_nuclear,
                       Thermal:t_thermal,
                       Renewable:t_renewable,
                       Heat_Power: t_heat_power,
                       Hydro: t_hydro,
                       Pumped_Hydro: t_pumped_hydro});
            t_nuclear = 0;
            t_thermal = 0;
            t_renewable = 0;
            t_heat_power = 0;
            t_hydro = 0;
            t_pumped_hydro  = 0;
            current_date = element[1][0].split(' ')[0].split('.')[2] + '-' + element[1][0].split(' ')[0].split('.')[1] + '-' + element[1][0].split(' ')[0].split('.')[0];
          }
          else {
            t_nuclear += parseInt(element[1][1]);
            t_thermal += parseInt(element[1][2]);
            t_renewable += parseInt(element[1][3]);
            t_heat_power += parseInt(element[1][4]);
            t_hydro += parseInt(element[1][5]);
            t_pumped_hydro += parseInt(element[1][6]);
          }
      }
    });
      data = data.reverse();
      data.pop();
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
export default MyBarChart;