import logo from './logo.svg';
import './App.css';
import React,{useState} from 'react';

function App() {
  const [count, setCount] = useState(0)
  return (
    <div className="App">
     hello
     <h2>{count}</h2>
     <button onClick={()=>setCount(count+1)}>inc</button>
     <button onClick={()=>setCount(count-1)}>dec</button>
     <button onClick={()=>setCount(0)}>reset</button>
    </div>
  );
}

export default App;
