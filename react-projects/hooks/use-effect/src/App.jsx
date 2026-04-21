import React, { useEffect, useState } from 'react';

const App = () => {

  const [count, setCount] = useState(0)

  useEffect(() => {

    //No dependency given will run every render
    console.log("WILL RUN EVERY RENDER")
  })

  useEffect(() => {
    //Dependency given as an empty array, so it will run only first time render
    console.log("Dependency given as an empty array, so it will run only first time render")
  }, [])


  useEffect(function () {
    //Will render first time and and state update time  
    console.log("Will render first time and and state update time  ")
  }, [count])

  return (
    <div className='jabaContainer'>
      <button className='counterBtn' onClick={() => { setCount(count + 1) }}>+</button>
      <span className='countShow'>{count}</span>
      <button className='counterBtn' onClick={() => { setCount(count - 1) }}>-</button>
    </div>
  );
}

export default App;