import React, { useState, useEffect } from 'react';
import { getProducts, getProductsByCategory } from '../../Asyncmock'
import ItemList from '../ItemList/ItemList';
import { useParams } from 'react-router-dom';



const ItemListContainer = ({greeting}) => {
  const [products, setProducts] = useState([]);
  
  const { categoryId } = useParams()

  useEffect(() => {
    const asyncFunc = categoryId ? getProductsByCategory : getProducts

    asyncFunc(categoryId)
        .then((response) => {
            setProducts(response);
        })
        .catch(error => {
            console.error(error)
        })
  }, [categoryId]);

  console.log(products);

  return (
    
    <div className='saludo'>
      <h1>{greeting}</h1>
      <ItemList products={products}/>
    </div>
  );
};

export default ItemListContainer;