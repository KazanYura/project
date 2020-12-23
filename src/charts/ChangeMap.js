import React, { memo } from "react";
import {
  ZoomableGroup,
  ComposableMap,
  Geographies,
  Geography
} from "react-simple-maps";
import {scaleQuantize} from 'd3-scale';
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
const geoUrl =
  "https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json";

const MapChart = ({ setTooltipContent }) => {
    let county_to_dom_religion_1 = {};
    let county_to_dom_religion_2 = {};
    let county_to_dom_religion = {};
    let data_import = JSON.parse(localStorage.getItem('data'));
    Object.entries(data_import).forEach(element => {
            if (parseInt(element[1][2]) !== 100 && parseInt(element[1][0]) === 2010){
              let e = element[1][2];
              e = e.replace('<',"");
              e = e.replace('>',"");
              county_to_dom_religion_1[element[1][1]] = parseInt(e);
            }
            if (parseInt(element[1][2]) !== 100 && parseInt(element[1][0]) === 2050){
                let e = element[1][2];
                e = e.replace('<',"");
                e = e.replace('>',"");
                county_to_dom_religion_2[element[1][1]] = parseInt(e);
                if (county_to_dom_religion_1.hasOwnProperty(element[1][1]) && (!county_to_dom_religion.hasOwnProperty(element[1][1]))){
                    county_to_dom_religion[element[1][1]] = (county_to_dom_religion_2[element[1][1]] - county_to_dom_religion_1[element[1][1]]) / 1000000;
                }
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
                  fill={colorScale(county_to_dom_religion[NAME])}
                  stroke={"rgb(0,0,0)"}
                  onMouseEnter={() => {
                    const { NAME } = geo.properties;
                    setTooltipContent(`${NAME} — ${county_to_dom_religion[NAME]} millions`);
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