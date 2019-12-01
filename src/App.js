import React, { useEffect, useState} from 'react';
import './App.css';

const  App = () => {
  const APP_ID = 'a7830b99';
  const APP_KEY = 'b9725f1b13ed41ae9f2e653bddd60409';

  const [counter, setCounter] = useState(0);

  useEffect(() => {
     getRecipes();
  }, []);

  const getRecipes = async () => {
    const response = await fetch(`https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`);
    const data = await response.json();
    console.log(data);
  };

  return (
    <div className="App">
      <form className="search-form">
        <input className="search-bar" type="text" />
        <button onClick={() => {setCounter(counter + 1)}} className="search-button">{counter}</button>
      </form>
    </div>
  );
}

export default App;
