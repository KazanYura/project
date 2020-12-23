import React from 'react';
import MapChart from '../charts/MuslimMap';
import ReactTooltip from "react-tooltip";
import { LegendThreshold } from '@vx/legend';
import '../style/views.css';
import {scaleQuantize} from 'd3-scale';
class MuslimsPage extends React.Component{
    state = {
        content: ""
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
                <p>
                    Ця карта показує частку мусульман для кожної із країн (станом на 2010 рік). <br/>
                    На ній існують декілька "чорних" точок невизначеності із двох причин: або даний регіон не є постійно заселений,або по ньому немає данних у датасеті.<br/>
                    При наведені курсором на країну буде показана її назва і частка мусульман.<br/>
                    Також над мапою наведені умовні "зони",щоб можливо було оцінити найбільший регіон мусульманства.<br/>
                    Як і очікувалося найбільша частка мусульман це територія Північної Африки та Близький Схід.<br/>
                </p>
                <LegendThreshold
                scale={colorScale}
                direction="row"
                labelMargin="0 15px 0 0"
                />
                <div className='cube'>
                <MapChart setTooltipContent={(content) => this.setState({content:content})}/>
                <ReactTooltip>{this.state.content}</ReactTooltip>
                </div>
            </div>)
    }
}
export default MuslimsPage;