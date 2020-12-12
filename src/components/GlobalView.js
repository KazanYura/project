import React from 'react';
import MyBarChart from '../charts/MyBarChart';
import MyLineChart from '../charts/MyLineChart';
import MyPieChart from "../charts/MyPieChart";
import '../style/views.css'
class GlobalView extends React.Component{

    render(){
        return(
            <div id="main_body">
                <div id='chart_holder'>
                    <MyLineChart/>
                    <div id='analysis'>
                        <h3>Comment:</h3>
                        <p>As you can see, from this chart energy production is always higher than consumption.
                           (Difference is lost during transport, that obvious). 
                           Also, we can see that energy consumption is higher during winter (more energy is spent on climate control at offices and homes). 
                           And during winter losses are bigger, because the colder it is outside, the harder energy transporting is)</p>
                    </div>
                </div>
                <div id='chart_holder'>
                    <MyPieChart/>
                    <div id='analysis'>
                        <h3>Comment:</h3>
                        <p>As you can see, from this chart Ukraine main energy source is Nuclear.
                           Very small part is Renewable and Hydro (which can increase our ecological situation).</p>
                    </div>
                </div>
                <div id='chart_holder'>
                    <MyBarChart/>
                    <div id='analysis'>
                        <h3>Comment:</h3>
                        <p>As you can see, from this chart value of Nuclear energy doesn't change dramatically. Renewable energy increased by 8 times. But also hydro decreased almost by 2 times. Heat Power decreased by 1.5 times.
                           Also you can notice that total energy consumption decreased from 2014 to 2016 and after that remains the same.
                        </p>
                    </div>
                </div>

            </div>)
    }
}
export default GlobalView;