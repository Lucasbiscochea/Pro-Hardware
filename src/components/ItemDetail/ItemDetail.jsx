import { useNavigate } from "react-router-dom";
import "./ItemDetail.css"
import ItemCount from "../ItemCount/ItemCount";


const ItemDetail = ({ category, brand, description, price, image, cuota }) => {
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
          <button className="addCart" onClick={()=> navigate(-1)}>← Volver</button>
          <ItemCount initial={1} stock={10} onAdd={() => console.log("added to cart")} />
          </div>

          
          
      </div>
    </div>
  </div>  
  )
}

export default ItemDetail;