import React from 'react';
import '../style/views.css';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import Pokedex from '../elements/Pokedex';
import RadarStats from '../charts/RadarStats';
import TableChart from '../charts/TableChart';
class PokedexBasic extends React.Component{
    state = {
        PokemonName: 1,
        isSelected:false,
    }
    render(){
        let options = [];
        let data_import = JSON.parse(localStorage.getItem('data'));
        Object.entries(data_import).forEach(element => {
            if (!element[1]["name"].includes("Alolan") && !element[1]["name"].includes("Galarian ") && !element[1]["name"].includes("Partner "))
            options.push({ value: element[1], label: element[1]["name"] },);
        });
        return(
            <div id="main_body">
                <Dropdown options={options} value={this.state.PokemonName["name"]} placeholder="Choose your Pokemon" onChange={(option) => this.setState({PokemonName:option.value,isSelected:true})} />
                <div className="chart_holder" style={{margin:"20px"}}>
                    <div>
                        <h3>Опис сторінки:</h3>
                        <p>Найпростіша із можливих візуалізацій,яка необхідна у контексті задачі - це візуалізація сильних сторін кожного Pokemon.<br/>
                        З цією метою я надав два можливих відображення (радіо графік для порівняння характеристик між собою,щоб зрозуміти роль конкретного покемона в грі; та таблицю слабкостей проти інших типів)<br/>
                        Над радіо графіком можна бачити висновок згідно характеристик (покемон є дамагером чи танком і якого типу.)<br/>
                        Таким чином ця сторінка візуалізує сильні сторони покемона і показує проти кого і за яких умов його використовувати.<br/><br/>

                        Для чого необхідно знати конкретно ці моменти:<br/>
                        Числа у таблиці показують наскільки сильні пошкодження буде завдавати атака певного типу для даного покемона, графік же вказує на те, до якого типу атак більш стійкий покемон (Defense та Special Defense)<br/>
                        Також показано,які типи атак вдаються покемону краще спеціальні чи фізичні (аналогічно до захисту). <br/>
                        Це допомагає приймати рішення стосовно застосування того чи іншого покемона в грі.<br/>
                        <br/>
                        Як користуватися даною сторінкою: <br/>
                        Для початку роботи просто необхідно обрати вгорі із випадаючого списку ім'я покемона. <br/>
                        Далі всі необхідні компоненти буде показано.<br/>
                        <br/>
                        Пояснення до таблиці:<br/>
                        У таблиці записано числа,які є множниками для шкоди від певного типу атак. Також клітинки мають певний колір,що характеризує тип як слабкість.<br/>
                        </p>
                        <ul>
                            <li>
                                Синій - множник 0 і як наслідок атака такого типу не нанесе жодної шкоди
                            </li>
                            <li>
                                Червоний - множник 2 і вище, у таких випадках покемона краще не використовувати.
                            </li>
                            <li>
                                Зелений - множник менший 1. Безпечна ситуація.
                            </li>
                            <li>
                                 Білий - множник 1 (нейтральна шкода)
                            </li>
                        </ul>


                    </div>

                {this.state.isSelected && <div><RadarStats pokemon={this.state.PokemonName}/> <TableChart pokemon={this.state.PokemonName}/></div>}
                {this.state.isSelected && <Pokedex pokemon={this.state.PokemonName}/>}
                </div>
            </div>)
    }
}

export default PokedexBasic;