import React, { useState } from "react";
import '../styles/TrafficLight.css';

const TrafficLight = () => {
    const [light, setLight] = useState('red');
//logic
const handleLightChange = () => {
    if (light === 'red') {
        setLight('green');
    } else if (light === 'green') {
        setLight('yellow');
    } else if (light === 'yellow') {
        setLight('red');
    }
};
const buttonChange = (color) => {
      if (light === color) {
         return `light ${color}`;  
    }
    return 'light';
};

//returning the classes
return (
     <>
      <div className={buttonChange('red')}></div>
      <div className={buttonChange('yellow')}></div>
      <div className={buttonChange('green')}></div>
     <button onClick={handleLightChange}>ChangLight</button>
     </>
);
}


export default TrafficLight;
