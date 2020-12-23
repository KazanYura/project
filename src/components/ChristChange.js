import React from 'react';
import MapChart from '../charts/ChangeMap';
import ReactTooltip from "react-tooltip";
import { LegendThreshold } from '@vx/legend';
import '../style/views.css';
import {scaleQuantize} from 'd3-scale';
class ChristChange extends React.Component{
    state = {
        content: ""
    }
    
    render(){
        const colorScale = scaleQuantize()
        .domain([-20, 80])
        .range([
            "#4292B9",
            "#70C4BC",
            "#8FD79F",
            "#B2E782",
            "#FFEA61",
            "#FFF54E",
            "#FFDD3C",
            "#FED303"
        ]);
        return(
            <div id="main_body">
                <p>
                    Ця карта показує прогнозовані зміни у кількості християн до 2050 року. <br/>
                    На ній існують декілька "чорних" точок невизначеності із двох причин: або даний регіон не є постійно заселений,або по ньому немає данних у датасеті.<br/>
                    При наведені курсором на країну буде показана її назва і зміна у мільйонах. (власне сама карта теж подана у мільйонах) <br/>
                    Також над мапою наведені умовні "зони",щоб можливо було оцінити рух розвитку християнства.<br/>
                    Бачимо,що основним центром зростання кількості християн можна вважати Африку та Америки. Ситуація в Європі прямує у протилежну сторону.<br/>
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
export default ChristChange;