// App.js
import React from "react";
import Fruits from "./Fruits";
import FruitsCounter from "./FruitsCounter";

function App() {
  const [fruits] = React.useState([
      {fruitName: 'apple', id: 1},
      {fruitName: 'apple', id: 2},
      {fruitName: 'plum', id: 3},
  ]);

  return (
    <div className="App">
      <h1>Where should the state go?</h1>
      <Fruits fruits={fruits} />
      <FruitsCounter fruits={fruits}/>
    </div>
  );
}

export default App;

//Fruits.js
function Fruits(props) {
    
    return (
        <div>
            {props.fruits.map(f => <p key={f.id}>{f.fruitName}</p>)}
        </div>
    )
}

export default Fruits

//FruitsCounter.js
function FruitsCounter(props) {
    return (
        <h2>Total fruits:  {props.fruits.length}</h2>
    )
}

export default FruitsCounter;
