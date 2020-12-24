import React from 'react';
import MapChart from '../charts/CustomMap';
import ReactTooltip from "react-tooltip";
import { LegendThreshold } from '@vx/legend';
import '../style/views.css';
import {scaleQuantize} from 'd3-scale';
import MyLineChart from '../charts/LineChart'
class CustomComponent extends React.Component{
    state = {
        content: "",
        selected_religion: "",

    }
    setGender(event) {
        this.setState({selected_religion:event.target.value})
      }
    render(){
        const colorScale = scaleQuantize()
            .domain([1, 100])
            .range([
            "#ffedea",
            "#ffcec5",
            "#ffad9f",
            "#ff8a75",
            "#ff5533",
            "#e2492d",
            "#be3d26",
            "#9a311f",
            "#782618"
            ]);
        return(
            <div id="main_body">
                <div onChange={this.setGender.bind(this)} className="checker">
                    <h3>Виберіть релігію</h3>
                    <input type="radio" value="Buddhists" name="religion"/> Buddhists
                    <input type="radio" value="Christians" name="religion"/> Christians
                    <input type="radio" value="Folk Religions" name="religion"/> Folk Religions
                    <input type="radio" value="Hindus" name="religion"/> Hindus
                    <input type="radio" value="Jews" name="religion"/> Jews
                    <input type="radio" value="Muslims" name="religion"/> Muslims
                    <input type="radio" value="Other Religions" name="religion"/> Other Religions
                    <input type="radio" value="Unaffiliated" name="religion"/> Unaffiliated

                </div>
                <LegendThreshold
                scale={colorScale}
                direction="row"
                labelMargin="0 15px 0 0"
                />
                <div className="chart_holder">
                <div className='cube'>
                <MapChart setTooltipContent={(content) => this.setState({content:content})} religion={this.state.selected_religion}/>
                <ReactTooltip>{this.state.content}</ReactTooltip>
                </div>
                <MyLineChart religion={this.state.selected_religion}/>
                </div>
            </div>)
    }
}
export default CustomComponent;