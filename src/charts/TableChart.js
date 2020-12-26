const affectiveAgainst = (type,pokemon) => {
    let type_m = "against_" + type;
    let v = parseFloat(pokemon[type_m])
    if (v > 1)
        return "effective";
    if (v === 1)
        return "neutral";
    if (v === 0)
        return "zero"
    return "not_eff"
}
const TableChart = ({ pokemon }) => {
    return(
            <table>
    <thead>
        <tr>
            <th colspan="18">Таблиця слабкостей</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td> Normal</td>
            <td>Fire</td>
            <td>Water</td>
            <td>Electric</td>
            <td>Grass</td>
            <td>Ice</td>
            <td>Fight</td>
            <td>Poison</td>
            <td>Ground</td>
            <td>Flying</td>
            <td>Psychic</td>
            <td>Bug</td>
            <td>Rock</td>
            <td>Ghost</td>
            <td>Dragon</td>
            <td>Dark</td>
            <td>Steel</td>
            <td>Fairy</td>
        </tr>
        <tr>
        <td className={affectiveAgainst("normal",pokemon)}> {pokemon["against_normal"]}</td>
        <td className={affectiveAgainst("fire",pokemon)}> {pokemon["against_fire"]}</td>
        <td className={affectiveAgainst("water",pokemon)}> {pokemon["against_water"]}</td>
        <td className={affectiveAgainst("electic",pokemon)}> {pokemon["against_electric"]}</td>
        <td className={affectiveAgainst("grass",pokemon)}> {pokemon["against_grass"]}</td>
        <td className={affectiveAgainst("ice",pokemon)}> {pokemon["against_ice"]}</td>
        <td className={affectiveAgainst("fight",pokemon)}> {pokemon["against_fight"]}</td>
        <td className={affectiveAgainst("poison",pokemon)}> {pokemon["against_poison"]}</td>
        <td className={affectiveAgainst("ground",pokemon)}> {pokemon["against_ground"]}</td>
        <td className={affectiveAgainst("flying",pokemon)}> {pokemon["against_flying"]}</td>
        <td className={affectiveAgainst("psychic",pokemon)}> {pokemon["against_psychic"]}</td>
        <td className={affectiveAgainst("bug",pokemon)}> {pokemon["against_bug"]}</td>
        <td className={affectiveAgainst("rock",pokemon)}> {pokemon["against_rock"]}</td>
        <td className={affectiveAgainst("ghost",pokemon)}> {pokemon["against_ghost"]}</td>
        <td className={affectiveAgainst("dragon",pokemon)}> {pokemon["against_dragon"]}</td>
        <td className={affectiveAgainst("dark",pokemon)}> {pokemon["against_dark"]}</td>
        <td className={affectiveAgainst("steel",pokemon)}> {pokemon["against_steel"]}</td>
        <td className={affectiveAgainst("fairy",pokemon)}> {pokemon["against_fairy"]}</td>
        </tr>
    </tbody>
</table>
) 
}
export default TableChart;
