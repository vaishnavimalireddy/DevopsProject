import React from 'react'; 
import './weather.css';
export default function Weather(props) {
//console.log(typeof(props.weather))
  const renderWeatherItem = item => {
    
    return (
      <div>
      <div className="box">
          <img className="image" src={`http://openweathermap.org/img/wn/${item.weather[0].icon}.png`} alt='weathericon' />

          <p className="card-text" id="temp">{item.main.temp} &deg;F</p>
          <p className="desc"><i>{item.weather[0].description}</i></p>
      </div>
    </div>
    )
  };
    
  return(
    
  
      <div>
        
        { props.weather ?
          props.weather.map((item) => {
            return renderWeatherItem(item)
          }):null
        }
          
      </div>
  )
    
}