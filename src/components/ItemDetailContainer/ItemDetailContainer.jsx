import './ItemDetailContainer.css'
import { useState, useEffect } from 'react'
import {getProductsByCategory} from '../../Asyncmock'
import ItemDetail from '../ItemDetail/ItemDetail'
import { useParams } from 'react-router-dom'

const ItemDetailContainer = () => {
    const [product, setProduct] = useState({})
    
    const { itemId } = useParams()
  
    useEffect(() => {
      getProductsByCategory(itemId)
        .then(response => {
          setProduct(response)
        })
        .catch(error => {
          console.error(error)
        })
    }, [itemId])

    return(
        <div className='ItemDetailContainer'>
            <ItemDetail product={product} />
        </div>
    )
    
}

export default ItemDetailContainer