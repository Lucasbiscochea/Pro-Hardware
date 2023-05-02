import { useState } from 'react';
import "./ItemCount.css"

const ItemCount = () => {
  const [count, setCount] = useState(1);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  const handleAddToCart = () => {
    console.log(`Added ${count} items to cart`);
  };
  return (
    <div>
      <div className='count-container'>
        <button onClick={handleDecrement}>-</button>
        <span>{count}</span>
        <button onClick={handleIncrement}>+</button>
      </div>
      <button onClick={handleAddToCart}>Agregar al Carrito</button>
    </div>
  );
};

export default ItemCount;
