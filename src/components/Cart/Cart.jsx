import './Cart.css'
import { useContext } from "react";
import { CartContext } from "../../Context/Context";
import CartItem from "../CartItem/CartItem";
import { Link } from "react-router-dom";

const Cart = () => {
  const { cart, cleanCart, total } = useContext(CartContext);
  if (cart.length === 0) {
    return (
      <div className="cartContainer">
        <h1 className='noProducts'>No hay productos en el carrito</h1>
        <Link to="/" className="option-link">
          Productos
        </Link>
      </div>
    );
  }

  const formattedTotal = new Intl.NumberFormat().format(total); // Agregar el punto de mil al total

  return (
    <div className="buttomContainer">
      {cart.map((p) => (
        <CartItem key={p.id} {...p} />
      ))}
      <div className="buttom">
        <h3>Total: ${formattedTotal}</h3>
        <button onClick={cleanCart} className="clean-button">
          Limpiar
        </button>
        <Link to="/checkout" className="option-link">
          Checkout
        </Link>
      </div>
    </div>
  );
};

export default Cart;
