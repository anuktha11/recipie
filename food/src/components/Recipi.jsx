import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './res.css'

 function Recipi() {
  const [searchCategory, setSearchCategory] = useState('');
  const [recipes, setRecipes] = useState([]);

  const handleChange = (event) => {
    setSearchCategory(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.get('https://api.edamam.com/search', {
        params: {
          q: searchCategory,
          app_id: '9cdee092',
          app_key: 'df4c94ff4f14f7daff8cecc335c60353'
        }
      });
      console.log(response.data);
      setRecipes(response.data.hits);
    } catch (error) {
      console.error('Error fetching recipes:', error);
    }
  };

   return (
     <div className='recipe-page'>
        <h2>Recipe Search</h2>
      <form className='search-bar ' onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Search category"
          value={searchCategory}
          onChange={handleChange}
        />
        <button type="submit">Search</button>
      </form>
      <div className="recipes-container">
        {recipes.map((recipe, index) => (
          <div key={index} className="recipe">
            <img   src={recipe.recipe.image} alt={recipe.recipe.label} />
            <h3>{recipe.recipe.label}</h3>
            <h4>CuisineType : {recipe.recipe.cuisineType}</h4>
            <h4>DietLabels : {recipe.recipe.dietLabels}</h4>
 

            {/* <ul>
  {recipe.recipe.ingredients
    .filter((_, i) => i < 5) // Filter to include only the first 5 ingredients
    .map((ingredient, i) => (
      <li key={i}>{ingredient.text}</li>
    ))}
</ul> */}

          </div>
        ))}
      </div>
     </div>
   )
 }
 
 export default Recipi
 