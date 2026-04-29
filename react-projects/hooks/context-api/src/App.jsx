import React, { useContext } from 'react';
import Child1 from './components/Child1';
import ThemeContext, { ThemeDataContext } from './context/ThemeContext';

const App = () => {

  const [theme] = useContext(ThemeDataContext)

  console.log("current them: ", theme)

  return (

    <div id='container' style={{ backgroundColor: theme === 'light' ? 'black' : 'beige' }}>
      <Child1 />
    </div>


  );
}

export default App;
