import { useState } from 'react';

function App() {
  // let counter = 10;
  // usually we use counter defualt value and setcounter what value we want to set
  // we use counter and setCounter naming convention but we can use any name
  // use state needs a function which take any value and return an array
  // the first value is the current state and the second value is a function to update that
  let [counter, AkashCounter] = useState(0); 

  const addValue = () => {
    // counter++;
    if(counter >= 20) {
      console.log("Counter can't be greater than 20");
      return;
    }
    AkashCounter(counter + 1);
    console.log(counter + 1);
  }

  const removeValue = () => {
    // counter--;
    if(counter <= 0) {
      console.log("Counter can't be negative");
      return;
    }
    AkashCounter(counter - 1);
    console.log(counter - 1);
  }

  return (
    <>
      <h1>chai aur react </h1>
      <h2>counter value : {counter}</h2>
      <button
        onClick={addValue}> add value {counter}</button>
      <button onClick={removeValue}>remove value{counter}</button>
    </>
  )
}

export default App;
