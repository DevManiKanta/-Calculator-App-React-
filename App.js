import { useState } from "react";
import React from "react";
import './App.css';
import Button from 'react-bootstrap/Button';

function App(){
   const[value, setValue] = useState('');
  
     return ( 
   
    <div className="Div1">
       <h1>React Calculator-APP</h1>
      <div>
       <input ype="text" value = {value}/>
       </div><br/>
       <div>
       <Button variant="primary" size="lg" onClick={()=>setValue(" ")}>Ac</Button>&nbsp;
       <Button variant="primary" size="lg" onClick={()=>setValue(value.slice(0,-2))} >D</Button>&nbsp;
       <Button variant="primary" value = "." size="lg" onClick ={e => setValue(value + e.target.value)}>.</Button>&nbsp;
       <Button variant="primary" value = "/" size="lg" onClick ={e => setValue(value + e.target.value)}>/</Button>&nbsp;
       </div><br/>
       <div>
       <Button variant="primary" value = "7"size="lg" onClick ={e => setValue(value + e.target.value)} >7</Button>&nbsp;
       <Button variant="primary" value = "8"size="lg" onClick ={e => setValue(value + e.target.value)}>8</Button>&nbsp;
       <Button variant="primary" value = "9"size="lg" onClick ={e => setValue(value + e.target.value)}>9</Button>&nbsp;
       <Button variant="primary" value = "+" size="lg" onClick ={e => setValue(value + e.target.value)}>+</Button>&nbsp;
       </div><br/>
       <div>
       <Button variant="primary" value = "4" size="lg" onClick ={e => setValue(value + e.target.value)}>4</Button>&nbsp;
       <Button variant="primary" value = "5" size="lg" onClick ={e => setValue(value + e.target.value)}>5</Button>&nbsp;
       <Button variant="primary" value = "6" size="lg" onClick ={e => setValue(value + e.target.value)}>6</Button>&nbsp;
       <Button variant="primary" value = "-" size="lg" onClick ={e => setValue(value +  e.target.value)}>-</Button>&nbsp;
       </div><br/>
       <div>
       <Button variant="primary" value = "3" size="lg" onClick ={e => setValue(value + e.target.value)}>3</Button>&nbsp;
       <Button variant="primary" value = "2" size="lg" onClick ={e => setValue(value + e.target.value)}>2</Button>&nbsp;
       <Button variant="primary" value = "1" size="lg" onClick ={e => setValue(value + e.target.value)}>1</Button>&nbsp;
       <Button variant="primary" value = "*" size="lg" onClick ={e => setValue( value + e.target.value)}>*</Button>&nbsp;
       </div><br/>
       <Button variant="primary" value = "=" size="lg" id="btn" onClick ={e => setValue(eval(value))}> =</Button>

      </div>
      
   )
}
export default App;