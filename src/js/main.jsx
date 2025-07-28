import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client'
import PropTypes from 'prop-types';

//Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap"

// index.css'
import '../styles/index.css'

// components
import Home from './components/Home';

import '@fortawesome/fontawesome-free/css/all.min.css';

// function SimpleCounter(props){

function SimpleCounter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount(c => c + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, []);
  
  const d1 = Math.floor(count/1000) %10;
  const d2 = Math.floor(count/100) %10;
  const d3 = Math.floor(count/10) %10;
  const d4 = Math.floor(count %10);

  return (<div className="bigCounter">

          <div className="timer"> <i class="fa-solid fa-alarm-clock"></i> </div>
          <div className="d1">{d1}</div>
          <div className="d2">{d2}</div>
          <div className="d3">{d3}</div>
          <div className="d4">{d4}</div>
  </div>);
}

SimpleCounter.propTypes ={
  //digitOne: PropTypes.number,
   //digitTwo: PropTypes.number,
  // digitThree: PropTypes.number,
  // digitFour: PropTypes.number,
};

//console.log(d1, d2, d3, d4);
  
  


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <SimpleCounter /> 
    
    <Home/>
  </React.StrictMode>,
); 