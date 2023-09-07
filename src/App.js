import './App.css';
import { useState,useMemo } from 'react';

function App() {

  const [countOne,setCountOne] = useState(0)
  const [countTwo,setCountTwo] = useState(0)

  const incrementOne = ()=>{
    setCountOne(countOne + 1)
  }

  const incrementTwo = ()=>{
    setCountTwo(countTwo + 1)
  }
 
  const isEven = useMemo(()=>{
    console.log("runs")
    let i = 0
    while(i<300000000) i++
    return countOne %2 ==0
  },[countOne])
  

  return (
    <div className="App">
  <h1>memo</h1>

  <button onClick={incrementOne}>CountOne</button>
  <span>countOne :{countOne} </span>
  <h1>{isEven? 'Even':'Odd'}</h1>
  <button onClick={incrementTwo}>CountTwo</button>
  <span>countTwo :{countTwo} </span>



    
    </div>
  );
}

export default App;
