import React,{useState} from 'react';
import {Message} from './message.js'
import './App.css';

export default function App() {

  let [count, setcount] = useState(1);
  let [isMorning, setMorning] = useState(true)

  return (
    <div className={`box ${isMorning ? 'daylight': ''}`}>

      <h1>Good {  isMorning ? 'Morning' : 'Night'}
      </h1>

      <Message counter={count} />
      <br />
      <button onClick={()=> setcount(count +1)}>
        Update Counter
      </button>

      <button onClick={()=> setMorning(!isMorning)}>Update Day</button>
 
    </div>
  );
}


