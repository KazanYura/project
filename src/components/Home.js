import React from "react";
import '../style/home.css';
class Home extends React.Component{

    render(){
        return(
    <div id="main_body">
      <h1>Опис:</h1>
      <p>Цей сайт був розроблений,як виконання проєкту з курсу "Візуалізація данних". 
      </p>
      <p>У проєкті є наступнимі сторінки:</p>
        <ol>
          <li><strong>Pokedex</strong>: сторінка,що показує сильні і слабкі сторони кожного окремовзятого покемона</li>
          <li><strong>Порівняння типів</strong>: згідно назви показує сильні та слабкі сторони кожного типу.</li>
          <li><strong>Легендарність</strong>: сторінка,що показує зв'язок легендарності та розміру з вагою</li>
        </ol>
      <p><strong>Автор: Казан Юрій</strong></p>
    </div>)
    }
}
export default Home;