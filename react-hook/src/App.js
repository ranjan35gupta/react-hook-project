import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [count,setCount]=useState(1)

  function increaseCount(){
    
    const initialValue=count
    setCount(initialValue+1)
    
    }

    function decreaseCount(){
      const initialValue = count
      if(initialValue-1>=0){
        setCount(initialValue-1)
      }
    }
  return (
    <div style={{textAlign:"center",
    width:"400px",
    height:"400px",
    background:"grey",}}>
      <h1 style={{color:"Blue"}}>{count}</h1>
      <button style={{width:"150px",
    marginRight:"20px",
    height:"30px",
    color:"green"}} onClick={increaseCount}>count-increase</button>
      <button style={{width:"150px",
    marginRight:"20px",
    height:"30px",
    color:"red"}}onClick={decreaseCount}>count-decrease</button>
      
    </div>
  );
}

export default App;
