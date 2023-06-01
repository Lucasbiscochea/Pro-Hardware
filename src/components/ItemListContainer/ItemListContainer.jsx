import React, { useState, useEffect } from 'react';
import { getProducts, getProductsByCategory } from '../../Asyncmock'
import ItemList from '../ItemList/ItemList';
import { useParams } from 'react-router-dom';

import { getDocs, collection, query, where } from 'firebase/firestore'

import { db } from '../../Services/firebase/firebaseConfig';

const ItemListContainer = ({greeting}) => {
  const [products, setProducts] = useState([]);
  
  const { categoryId } = useParams()

  useEffect(() => {
   const collectionRef = categoryId
      ? query(collection(db, 'Items'), where('category', '==', categoryId))
      : collection(db, 'Items')

   getDocs(collectionRef)
        .then(response => {
          const productsAdapted = response.docs.map(doc =>{
            const data = doc.data()
            return { id: doc.id, ...data}
          })
          setProducts(productsAdapted)
        })
        .catch(error => {
          console.log(error)
        })   
  }, []);

  console.log(products);

  return (
    
    <div className='saludo'>
      <h1>{greeting}</h1>
      <ItemList products={products}/>
    </div>
  );
};

export default ItemListContainer;