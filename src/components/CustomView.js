import React from "react";
import { DateRangePicker } from 'react-date-range';
import CustomLineChart from '../charts/CustomLineChart';
import CustomBarChart from '../charts/CustomBarChart';

import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file


class CustomView extends React.Component{

    handleSelect(range){
        let text_end_date = range.selection.endDate.getFullYear() + "-" + range.selection.endDate.getMonth() + 1 + '-' + range.selection.endDate.getDate();
        localStorage.setItem("endDate",text_end_date);
        let text_start_date = range.selection.startDate.getFullYear() + "-" + range.selection.startDate.getMonth() + 1 + '-' + range.selection.startDate.getDate();
        localStorage.setItem("startDate",text_start_date);
        this.setState({ state: this.state });
    }

    render(){
      const selectionRange = {
        startDate: new Date("2014-01-01"),
        endDate: new Date("2014-01-01"),
        key: 'selection',
      }
      return(
        <div id="main_body">
          <h3>This section wouldn't have any analytics. This is just for deeper understanding</h3>
          <DateRangePicker
            minDate = {new Date("2014-01-01")}
            maxDate = {new Date("2020-03-10")}
            shownDate = {new Date("2014-01-01")}
            ranges={[selectionRange]}
            editableDateInputs={true}
            onChange={(range) => {this.handleSelect(range)}}
          />
          <Checkbox
            value="checkedA"
            inputProps={{ 'aria-label': 'Checkbox A' }}
          />
            <div id='chart_holder'>
              <CustomLineChart/>
              </div>
                <div id='chart_holder'>
                    <CustomBarChart></CustomBarChart>
                </div>
        </div>)
    }
}
export default CustomView;