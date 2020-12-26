import React, { memo } from "react";

const TypeToColor  = {
    "Normal":"#A8A77A",
    "Fire":  "#EE8130",
    "Water":  "#6390F0",
    "Electric":  "#F7D02C",
    "Grass":  "#7AC74C",
    "Ice":  "#96D9D6",
    "Fighting":  "#C22E28",
    "Poison":  "#A33EA1",
    "Ground":  "#E2BF65",
    "Flying":  "#A98FF3",
    "Psychic":  "#F95587",
    "Bug":  "#A6B91A",
    "Rock":  "#B6A136",
    "Ghost":  "#735797",
    "Dragon":  "#6F35FC",
    "Dark":  "#705746",
    "Steel":  "#B7B7CE",
    "Fairy":  "#D685AD", 
}
const MapChart = ({ pokemon }) => {
    let imageName;

    if (pokemon["name"].includes("Mega ")){
        if ((pokemon["name"].includes("Mega ")) && (pokemon["name"].includes(" X")))
        imageName = pokemon["pokedex_number"] + "-mega-x";
        else {
            if ((pokemon["name"].includes("Mega ")) && (pokemon["name"].includes(" Y")))
            imageName = pokemon["pokedex_number"] + "-mega-y";
            else 
            imageName = pokemon["pokedex_number"] + "-mega";
        }
    }
    else {
        imageName = pokemon["pokedex_number"]
    }
  return (
    <>
    <div className="pokedex" style={{backgroundColor:TypeToColor[pokemon["type_1"]], textAlign:"center", width:"350px",float:"right",border:"3px solid black"}}>
        <div className="nameHolder" style={{padding:"5%"}}>
            <h2>#{pokemon["pokedex_number"]}  {pokemon["name"]}</h2>
        </div>
        <div className="imageHolder" style={{borderTop:"3px solid black",padding:"5%"}}>
            <img src={process.env.PUBLIC_URL + "/images/pokemon_jpg/" + imageName + ".jpg"}/>
        </div>
        <div className="statsHolder" style={{paddingBottom:"20px"}}>
            <div style={{borderTop:"3px solid black"}}>
            <h3>Type</h3>
            <ul>
                <li>
                    {pokemon["type_1"]}
                    </li>
                    <li>
                        {pokemon["type_2"]}
                    </li>
                </ul>
            </div>
            <div style={{borderTop:"3px solid black"}}>
            <h3>Abilities:</h3>
                <ul>
                    <li>
                        {pokemon["ability_1"]}
                    </li>
                    <li>
                        {pokemon["ability_2"]}
                    </li>
                    <li>
                        {pokemon["ability_hidden"]}
                    </li>
                </ul>
                </div>
                <div style={{borderTop:"3px solid black"}}>
                <h3>Stats:</h3>
                <ul>
                    <li>
                        HP: {pokemon["hp"]}
                    </li>
                    <li>
                        Attack: {pokemon["attack"]}
                    </li>
                    <li>
                        Defense: {pokemon["defense"]}
                    </li>
                    <li>
                        Special Attack: {pokemon["sp_attack"]}
                    </li>
                    <li>
                        Special Defense: {pokemon["sp_defense"]}
                    </li>
                    <li>
                        Speed: {pokemon["speed"]}
                    </li>
                </ul>
                </div>
        </div>
    </div>
    </>
  );
};

export default memo(MapChart);