import React, { useState, useEffect } from 'react';
import Recipe from './components/recipes';
import Header from './components/header';
import './App.css';

function App() {
	const APP_ID = '5125c981';
	const APP_KEY = '277dc81cc5f2f7de911b5f049ae48ef8';

	const [recipes, setRecipes] = useState([]);
	const [search, setSearch] = useState('');
	const [query, setQuery] = useState('blueberry');

	useEffect(() => {
		getRecipes();
	},[query]);

	const getRecipes = async () => {
		const response = await fetch(
			`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
		);
		const data = await response.json();
		setRecipes(data.hits);
		console.log(data.hits);
	};

	const updateSearch = e => {
		setSearch(e.target.value);
	};

	const getSearch = e => {
		e.preventDefault();
    setQuery(search);
    setSearch('')
	};

	return (
		<div className='App'>
      <Header />
			<form onSubmit={getSearch} className='search-form'>
				<input
					className='search-bar'
					value={search}
					onChange={updateSearch}
				></input>
				<button className='search-button' type='submit'>
					Search
				</button>
			</form>
      <div className='recipes'>
			{recipes.map((recipe, index) => (
				<Recipe
					key={index}
					title={recipe.recipe.label}
					category={recipe.recipe.dietLabels}
          image={recipe.recipe.image}
          ingredients={recipe.recipe.ingredients}
				/>
      ))}
      </div>
		</div>
	);
}

export default App;
