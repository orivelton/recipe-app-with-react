const APP_ID = 'a7830b99';
const APP_KEY = 'b9725f1b13ed41ae9f2e653bddd60409';

const GetRecipes = async (query, setRecipes) => {
  const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
  const data = await response.json();
  setRecipes(data.hits);
};

export default GetRecipes;
