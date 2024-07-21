import React, { useState } from 'react';
import { ingredients as allIngredients } from './Ingredients'; 
import './burger.css';

function Burger() {
  const [burgerIngredients, setBurgerIngredients] = useState([]);

  //finds the filling to be added
  //generatre a unique key using the date 
  const addIngredient = (id) => {
    const ingredient = allIngredients.find(item => item.id === id);
    setBurgerIngredients([...burgerIngredients, {...ingredient, key: Date.now()}]);
  };

  
  const removeIngredient = (key) => {
    setBurgerIngredients(burgerIngredients.filter(ingredient => ingredient.key !==key));
  };
  
  return (

    <div className='container'>

      <div className='top-bun'></div>

      {burgerIngredients.map((ingredient, index) => (
        <div 
          key={index} 
          className={`ingredient ${ingredient.fillings.toLowerCase()}`} 
          onClick={() => removeIngredient(ingredient.key)}
          style={{ backgroundColor: ingredient.color }}>
          <p>{ingredient.fillings}</p>
        </div>
      ))}

      <div className='bottom-bun'></div>

      <div>
        <button onClick={() => addIngredient(1)}>Add Tomato</button>
        <button onClick={() => addIngredient(2)}>Add Meat</button>
        <button onClick={() => addIngredient(3)}>Add Lettuce</button>
      </div>
    
    </div>

  );

}

export default Burger;
