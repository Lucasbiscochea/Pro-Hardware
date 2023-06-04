import { Link, useNavigate } from "react-router-dom";
import "./ItemDetail.css"
import ItemCount from "../ItemCount/ItemCount";
import { useContext, useState } from "react";
import { CartContext } from "../../Context/Context";


const ItemDetail = ({ id, category, brand, description, price, image, cuota }) => {
  const [quantityAdded, setQuantityAdded] = useState(0)
  const stock = 100;
  const { addItem } = useContext(CartContext)

  const handleOnAdd = (quantity) => {
      setQuantityAdded(quantity)

      const Item = {
        id, brand, price
      }
      addItem(Item, quantity)
  }




  const navigate = useNavigate()
  console.log (description)
  return (
    <div className="detailsContainer">
      <div className='CardItemDetail'>
        <div className="big-img">
          <img src={image} alt={category} className='ImgDetail' />
        </div>
        <div className="box">
          <div className="row">
            <h2>{brand}</h2>
          <span>${price}</span>
          <p>{cuota}</p>
          <p className="descripdetalle">{description}</p>
          </div>
            <div>
              {
                quantityAdded > 0 ? (
                          <Link to='/cart' className="addCart" >Terminar Compra</Link>
                ) : (

                          <ItemCount initial={1} stock={stock} onAdd={handleOnAdd} />
                )
              }
              <button onClick={() => navigate(-1)} className="addCart">Volver</button>
            </div>          
      </div>
    </div>
  </div>  
  )
}

export default ItemDetail;