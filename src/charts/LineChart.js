import React from "react";
import { Line,
         LineChart,
         CartesianGrid,
         Tooltip,
         XAxis,
         YAxis,
         Legend } from 'recharts';

const religions = ["Christians","Muslims","Unaffiliated","Hindus","Buddhists","Folk Religions","Other Religions","Jews"]
const MyLineChart = ({religion }) => {
    let index = religions.indexOf(religion);
    let county_to_dom_religion = [];
    let first = true;
    let year;
    let data_import = JSON.parse(localStorage.getItem('data'))
    Object.entries(data_import).forEach(element => {
        if (parseInt(element[1][0]) !== year){
            first = true;
        }
            if (parseInt(element[1][2]) !== 100 && (element[1][1] === " All Countries") && first){
                year = parseInt(element[1][0]);
              let amount = element[1][2 + index];
              amount = amount.replace('<',"");
              amount = amount.replace('>',"");
              let found = false;
              for (let index = 0; index < county_to_dom_religion.length; index++) {
                  const e = county_to_dom_religion[index];
                  if (e.name === parseInt(element[1][0])){
                      found = true;
                      if (amount > 100)
                      e.religion += parseInt(amount) / 1000000.0;
                      break;
                  }
              }
              if (!found){
                  county_to_dom_religion.push({name:parseInt(element[1][0]),religion:parseInt(amount)/ 1000000.0});
                  first = false;
              }
            }
    });
  return (
            <LineChart
                    width={600}
                    height={600}
                    data={county_to_dom_religion}
                    margin={{
                    top: 5, right: 30, left: 20, bottom: 5,
                    }}
            >
                    <CartesianGrid strokeDasharray="59015 1000" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="religion" stroke="#8884d8" name={religion} activeDot={{ r: 8 }} />
            </LineChart>
        )
    }
export default MyLineChart;