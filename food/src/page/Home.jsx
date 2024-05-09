import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import axios from 'axios';
import './home.css';
import Footer from '../components/Footer';

function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [
    'https://wallpapers.com/images/featured/food-4k-1pf6px6ryqfjtnyr.jpg',
    'https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?cs=srgb&dl=pexels-chanwalrus-958545.jpg&fm=jpg',
    'https://images.alphacoders.com/862/862639.jpg'
  ];

  const [recipes, setRecipes] = useState([]);

  // Suppress React Hook useEffect missing dependency warning
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  useEffect(() => {
    const interval = setInterval(nextImage, 2000);  
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    // Fetch recipes from Edamam API
    const fetchRecipes = async () => {
      try {
        const response = await axios.get('https://api.edamam.com/search', {
          params: {
            q: 'vegetarian', // empty query
            app_id: '9cdee092',
            app_key: 'df4c94ff4f14f7daff8cecc335c60353'
          }
        });
        console.log('Response:', response.data)
        setRecipes(response.data.hits.slice(0, 8)); // Assuming we only want 9 recipes
      } catch (error) {
        console.error('Error fetching recipes:', error);
      }
    };

    fetchRecipes();

  }, []); // Empty dependency array to run once on mount

  return (
    <div>
      <Header />
      <div className="carousel-container">
        {images.map((imageUrl, index) => (
          <img
            key={index}
            src={imageUrl}
            alt={`Food ${index + 1}`} // Example of a concise alt text
            className={index === currentIndex ? 'active' : ''}
          />
        ))}
      </div>
      <div className='popular'>
          <h2>POPULAR</h2>
      </div>
      <div className="recipes-container">
        {recipes.map((recipe, index) => (
          <div key={index} className="recipe">
            <img src={recipe.recipe.image} alt={recipe.recipe.label} />
            <h3>{recipe.recipe.label}</h3>
            {/* <ul>
              {recipe.recipe.ingredients.map((ingredient, i) => (
                <li key={i}>{ingredient.text}</li>
              ))}
            </ul> */}
          </div>
        ))}
      </div>
     <Footer/>
    </div>
  );
}

export default Home;
