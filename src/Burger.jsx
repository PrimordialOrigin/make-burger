import React, { useState } from 'react';
import { ingredients as allIngredients } from './Ingredients'; 

function Burger() {
  const [burgerIngredients, setBurgerIngredients] = useState([]);

  const addIngredient = (id) => {
    const ingredient = allIngredients.find(item => item.id === id);
    setBurgerIngredients([...burgerIngredients, ingredient]);
  };

  return (
    <div>
      <div className='top-bun'></div>
      {burgerIngredients.map((ingredient, index) => (
        <div key={index} className='ingredient' style={{ backgroundColor: ingredient.color }}>
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
