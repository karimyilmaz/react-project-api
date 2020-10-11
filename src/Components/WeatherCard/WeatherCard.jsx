import React from 'react'
import './WeatherCard.css'

function WeatherCard(props){
    return(
        <div className="weather-card">
            <h1>{props.name}</h1>
            <h2>{props.country}</h2>
            <img src={`http://openweathermap.org/img/wn/${props.icon}@2x.png`}/>
            <h1>{props.temp}&deg;</h1>
            <p>min:{props.tempMin}&deg; max:{props.tempMax}&deg;</p>
        </div>
        
    )
}



// <WeatherCard name={name} country={country} icon={icon} 
//           temp={Math.floor(temp-273.15)} tempMin={Math.floor(temp_min-273.15)} tempMax={Math.floor(temp_max-273.15)}
export default WeatherCard