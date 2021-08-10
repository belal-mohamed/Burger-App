import React, {useState, useEffect} from 'react';

import IngredientForm from './IngredientForm';
import IngredientList from './IngredientList';
import Search from './Search';

function Ingredients() {
  const [userIngredients, setUserIngredients] = useState([]);
  useEffect(() => {
    fetch('https://ingredients-911bd-default-rtdb.firebaseio.com/ingredients.json', {
      method: 'GET'
    })
      .then(response => response.json())
        .then(ingredientsObject => {
          const ingredients = [];
          for(let key in ingredientsObject) {
            ingredients.push({
              id: key,
              title: ingredientsObject[key].title,
              amount: ingredientsObject[key].amount
            })
          }
          setUserIngredients(ingredients);
        })
  }, [])
  
  const addIngredientsHandler = (ingredient) => {
    fetch('https://ingredients-911bd-default-rtdb.firebaseio.com/ingredients.json', {
      method: 'POST',
      body: JSON.stringify(ingredient),
      headers: {'Content-Type' : 'application/json'}
    }).then(response => {
      return response.json(); // convert res to javascript object and will return promise so we can use then
    }).then(responseData => {
      setUserIngredients(prevState => {
        return [...prevState, {
          id: responseData.name,
          ...ingredient
        }]
      })
    })
  };

  return ( 
    <div className="App">
      <IngredientForm onAddIngredient={addIngredientsHandler}/>

      <section>
        <Search />
        <IngredientList 
          ingredients={userIngredients} 
          onRemoveItem={() => {}}/>
      </section>
    </div>
  );
}

export default Ingredients;
