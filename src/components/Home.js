import React from "react";
import '../style/home.css';
class Home extends React.Component{

    render(){
        return(
    <div id="main_body">
      <h1>Description:</h1>
      <p>We have a <strong>"Global page"</strong> which contains visualization and plots with general information such as</p>
        <ol>
          <li>Diagram about how much energy of each type was developed from 2014.</li>
          <li>The plot which shows statistic per each energy source.</li>
          <li>Percentage changes.</li>
          <li>Plot with consumed and produced energy in order to show energy losses.</li>
        </ol>
        We have a <strong>"Daily page"</strong> which contains information about each day separately in order to prevent some information loss.
        On this page you can see:
        <ol>
          <li>Hours of producing for each energy.</li>
          <li>The total amount of produced and consumed energy.</li>
        </ol>
        <p>You could define time limits and see a plot as you wish on the <strong>"Custom page"</strong>.</p>
      <p><strong>Author: Yurii Kazan</strong></p>
    </div>)
    }
}
export default Home;