import './ItemDetailContainer.css'
import productsJSON from '../../products.json'
import ItemDetail from '../ItemDetail/ItemDetail'
import { useParams } from 'react-router-dom'

const ItemDetailContainer = () => {
    const { itemId } = useParams()
  
    let product = productsJSON.products.find((producto)=> producto.id === parseInt(itemId))
    return(
        <div className='ItemDetailContainer'>
          <ItemDetail
            key={product.id}
                category={product.id}
                image={product.image}
                brand={product.brand}
                price={product.price}
                cuota={product.cuota}
                description={product.description}
              />
        {
  }
  </div>
);
    
}

export default ItemDetailContainer