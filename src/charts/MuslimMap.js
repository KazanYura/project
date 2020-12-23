import React, { memo } from "react";
import {
  ZoomableGroup,
  ComposableMap,
  Geographies,
  Geography
} from "react-simple-maps";
import {scaleQuantize} from 'd3-scale';
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
const geoUrl =
  "https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json";

const MapChart = ({ setTooltipContent }) => {
    let county_to_dom_religion = {};
    let data_import = JSON.parse(localStorage.getItem('data'));
    Object.entries(data_import).forEach(element => {
            if (parseInt(element[1][2]) === 100 && parseInt(element[1][0]) === 2010){
              let e = element[1][8];
              e = e.replace('<',"");
              e = e.replace('>',"");
              county_to_dom_religion[element[1][1]] = parseInt(e);
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