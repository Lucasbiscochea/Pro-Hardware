import React, {useState, useEffect} from 'react'
import { getProductsByCategory} from '../../Asyncmock'
import { useParams } from 'react-router-dom'
import MoonLoader from "react-spinners/ClipLoader";

const ItemDetail = () => {
  const [ products, setProducts ] = useState([]);
  const { IdItem } = useParams ();

  useEffect(() => {

    setProducts([])

    getProductsByCategory(products.filter(flt => flt.id == IdItem),2000)
    .then(resp => setProducts(resp))
    .catch(error => console.log(error))
  }, [IdItem])

  return (
    <div className='ItemDetail'>
      {    
        (products.length === 0) ? <MoonLoader color="#5b00fb" /> 
        : products.map((items) => (
          <><div className='ContainerLeft'>
            <Image
              image={items.image} />
          </div>
          <div className='containerRigth'>
            <p>
              Descripcion
            </p>
            </div></>
        ))
      }
    </div>
  );
}

export default ItemDetail