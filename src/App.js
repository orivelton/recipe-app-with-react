import React, { useEffect, useState} from 'react';
import GetRecipes from './service/GetRecipes';
import Recipe from './components/Recipe';
import Loading from './components/Loading';
import './App.scss';

const  App = () => {
  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('chicken');

  useEffect(() => {
    GetRecipes(query, setRecipes);
  }, [query]);
  
  const updateSearch = e => setSearch(e.target.value);

  const getSearch = e => {
    e.preventDefault();
    setQuery(search);
    setSearch('');
  }

  return (
    <div className="App">
      <form className="search-form" onSubmit={getSearch}>
        <input className="search-bar" type="text" value={search} onChange={updateSearch} />
        <button className="search-button">Search</button>
      </form>
      
      {
        recipes.map(recipe => (
          <Recipe
          key={recipe.recipe.calories}
          title={recipe.recipe.label} 
          calories={recipe.recipe.calories} 
          image={recipe.recipe.image} 
          ingredients={recipe.recipe.ingredients} 
          />
          )
        )
      }
      <Loading />
    </div>
  );
}

export default App;
