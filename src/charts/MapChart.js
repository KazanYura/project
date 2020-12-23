import React, { memo } from "react";
import {
  ZoomableGroup,
  ComposableMap,
  Geographies,
  Geography
} from "react-simple-maps";
const religions_to_color= {"Buddhists":"#66c2a5","Christians":"#fc8d62","Folk Religions":"#8da0cb","Hindus":"#e78ac3","Muslims":"#a6d854","Other Religions":"#ffd92f","Unaffiliated":"#b3b3b3"  }
const religions = ["Buddhists","Christians","Folk Religions","Hindus","Jews","Muslims","Other Religions","Unaffiliated"]
const geoUrl =
  "https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json";

const MapChart = ({ setTooltipContent }) => {
    let max_id;
    let max_p;
    let county_to_dom_religion = {};
    let data_import = JSON.parse(localStorage.getItem('data'));
    Object.entries(data_import).forEach(element => {
            if (parseInt(element[1][2]) === 100 && parseInt(element[1][0]) === 2010){
                max_p = 0;
                max_id = -1;
                for (let index = 3; index < element[1].length; index++) {
                    let e = element[1][index];
                    e = e.replace('<',"");
                    e = e.replace('>',"");
                    if (parseFloat(e) > max_p){
                            max_p = parseFloat(e);
                            max_id = index;
                    }
                }
                county_to_dom_religion[element[1][1]] = religions[max_id - 3]
            }
    });
  return (
    <>
      <ComposableMap data-tip="" projectionConfig={{ scale: 200 }}>
        <ZoomableGroup>
          <Geographies geography={geoUrl}>
            {({ geographies }) =>
              geographies.map(geo => {
                const { NAME } = geo.properties;
                  return(
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  fill={religions_to_color[county_to_dom_religion[NAME]]}
                  stroke={"rgb(0,0,0)"}
                  onMouseEnter={() => {
                    const { NAME } = geo.properties;
                    setTooltipContent(`${NAME} — ${county_to_dom_religion[NAME]}`);
                  }}
                  onMouseLeave={() => {
                    setTooltipContent("");
                  }}
                />);
                })
            }
          </Geographies>
        </ZoomableGroup>
      </ComposableMap>
    </>
  );
};

export default memo(MapChart);