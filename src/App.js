import './App.css';
import Counter from './Counter/Counter';
import { React, useState } from 'react';

function App() {
  const [counters, setCounters] = useState([<Counter /> ])
  
  // const addCounter = () => setCounters(...counters, counters.push(<Counter />))

  const addCounter = () => {
    let moreCounters = [...counters, <Counter />]
    setCounters(moreCounters)

}
  
  return (
    <div className="App">
      <button onClick={addCounter}>Add counter</button>
      {counters}
    </div>
  );
}

export default App;
