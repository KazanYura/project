import React from "react";
import { Line,
         LineChart,
         CartesianGrid,
         Tooltip,
         XAxis,
         YAxis,
         Legend } from 'recharts';

let t_production = 0,t_consuming = 0;
class MyDailyLineChart extends React.Component{
    render(){
      let data = [];
      let founded = false;
      let current_time;
      let counter = 1;
        let data_import = JSON.parse(localStorage.getItem('data'));
        Object.entries(data_import).forEach(element => {
            t_production += parseInt(element[1][1]) + parseInt(element[1][2]) + parseInt(element[1][3]) + parseInt(element[1][4]) + parseInt(element[1][5]) + parseInt(element[1][6]);
            t_consuming += parseInt(element[1][7]);
            for (let i = 0; i < data.length; i++){
                if (data[i].name === current_time){
                    data[i].Consuming += t_consuming;
                    counter += 1;
                    data[i].Production += t_production;
                    founded = true;
                    break;
                }
            }
            if (!founded)
                    data.push({name: current_time,Consuming:t_consuming,Production:t_production});
                t_production = 0;
                t_consuming = 0;
                founded = false;
                current_time = element[1][0].split(' ')[1].split(':')[0];
          }
      );

      data = data.reverse();
      data.pop()
      for (let i = 0; i < data.length; i++){
        data[i].Consuming /= counter;
        data[i].Production /= counter;
      }
        return(
            <LineChart
                    width={1200}
                    height={600}
                    data={data}
                    margin={{
                    top: 5, right: 30, left: 20, bottom: 5,
                    }}
            >
                    <CartesianGrid strokeDasharray="59015 1000" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="Consuming" stroke="#8884d8" activeDot={{ r: 8 }} />
                    <Line type="monotone" dataKey="Production" stroke="#82ca9d" />
            </LineChart>
        )
}
}
export default MyDailyLineChart;