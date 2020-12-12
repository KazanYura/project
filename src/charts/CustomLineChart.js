import React from "react";
import { Line,
         LineChart,
         CartesianGrid,
         Tooltip,
         XAxis,
         YAxis,
         Legend } from 'recharts';

let mountToNamesDict = {1 : "Jan", 2 : "Feb", 3 : "Mar", 4 : "Apr", 5: "May", 6 : "Jun", 7 : "Jul", 8 : "Aug", 9 : "Sep", 10 : "Oct", 11 : "Nov", 12 : "Dec"};

let t_production = 0,t_consuming = 0;
class CustomLineChart extends React.Component{
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
            data.push({name: text_date,Consuming:t_consuming,Production:t_production});
            t_production = 0;
            t_consuming = 0;
            current_date = element[1][0].split(' ')[0].split('.')[2] + '-' + element[1][0].split(' ')[0].split('.')[1] + '-' + element[1][0].split(' ')[0].split('.')[0];
          }
          else {
            t_production += parseInt(element[1][1]) + parseInt(element[1][2]) + parseInt(element[1][3]) + parseInt(element[1][4]) + parseInt(element[1][5]) + parseInt(element[1][6]);
            t_consuming += parseInt(element[1][7]);
          }
        }
      });
      data = data.reverse();
      data.pop();
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
export default CustomLineChart;