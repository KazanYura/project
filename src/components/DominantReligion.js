import React from 'react';
import MapChart from '../charts/MapChart';
import ReactTooltip from "react-tooltip";
import { LegendThreshold } from '@vx/legend';
import '../style/views.css';
import {scaleQuantize} from 'd3-scale';
class DominantReligion extends React.Component{
    state = {
        content: ""
    }
    
    render(){
        return(
            <div id="main_body">
                <p>
                    Ця карта показує домінанту релігію для кожної із країн. <br/>
                    На ній існують декілька "чорних" точок невизначеності із двох причин: або даний регіон не є постійно заселений,або по ньому немає данних у датасеті.<br/>
                    При наведені курсором на країну буде показана її назва і домінанта релігія. Був обраний такий спосіб візуалізації, бо він є найпростішим у даному варіанті.<br/>
                    І при існуванні функції наведення і отримання потрібної інформації відпадає потреба у додатковому поясненні що означає кожен із кольорів.<br/>
                    З карти бачимо,що найпоширеніша релігія це християнство. Також є релігії однієї країни (Іудаїзм в Ізраєлі)<br/>
                </p>
                <div className='cube'>
                <MapChart setTooltipContent={(content) => this.setState({content:content})}/>
                <ReactTooltip>{this.state.content}</ReactTooltip>
                </div>
            </div>)
    }
}
export default DominantReligion;