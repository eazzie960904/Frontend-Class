import './App.css';
import { useState, useEffect, useRef } from 'react';
import Viewer from './components/Viewer';
import Controller from './components/Controller';
import Even from './components/Even';

function App() {
  const [count,setCount]=useState(0);
  const [text, setText]=useState("");
  const didMountRef = useRef(false);

  const handleSetCount = (value) =>{
    setCount(count+value);
  };

  const handleChangeText = (e)=>{
    setText(e.target.value);
  };

  return (
    <div className="App">
     <h1>simple Counter</h1>
     <section>
      <input value={text} onChange={handleChangeText}/>
     </section>
     <section>
      <Viewer count={count}/>
      {count %2 === 0 && <Even/>}
     </section>
     <section>
      <Controller handleSetCount={handleSetCount}/>
     </section>
    </div>
  );
}

export default App;
