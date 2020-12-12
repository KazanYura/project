import React from "react";
import MyDailyLineChart from '../charts/MyDailyLineChart';

import MyDailyBarChart from '../charts/MyDailyBarChart';

import '../style/views.css';

class DailyView extends React.Component{

    render(){
        return(
            <div id="main_body">
                <div id='chart_holder'>
                    <MyDailyLineChart/>
                    <div id='analysis'>
                        <h3>Comment:</h3>
                        <p>This chart is pretty similar to coresponding one on Global page. From here we can see that the biggest amount of energy is consumed during from 19 to 22 hours, 
                            The smallest amount is from 4 to 6.
                        </p>
                    </div>
                </div>
                <div id='chart_holder'>
                    <MyDailyBarChart/>
                    <div id='analysis'>
                        <h3>Comment:</h3>
                        <p>This chart shows us next data:</p>
                        <ol>
                            <li>
                                Nuclear energy is always const
                            </li>
                            <li>
                                Heat Power energy is almost the same (se time from 00 to 08)
                            </li>
                            <li>
                                Thermal energy is const
                            </li>
                            <li>
                                Pumped Hydro starts working at 10 and finish at 00
                            </li>
                            <li>
                                Hydro is almost the same as Pumped Hydro
                            </li>
                        </ol>
                    </div>
                </div>

            </div>)
    }
}
export default DailyView;