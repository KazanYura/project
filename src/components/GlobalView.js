import React from 'react';
import MyBarChart from '../charts/MyBarChart';
import MyLineChart from '../charts/MyLineChart';
import MyPieChart from "../charts/MyPieChart";

class GlobalView extends React.Component{

    render(){
        return(
            <div id="main_body">
                <MyLineChart/>
                <MyPieChart/>
                <MyBarChart/>
            </div>)
    }
}
export default GlobalView;