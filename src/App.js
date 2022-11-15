import "./App.css";
import { useState } from "react";
import bakeryData from "./assets/bakery-data.json";
import BakeryItem from './components/BakeryItem.js';

/* ####### DO NOT TOUCH -- this makes the image URLs work ####### */
bakeryData.forEach((item) => {
  item.image = process.env.PUBLIC_URL + "/" + item.image;
});
/* ############################################################## */

function App() {
  // TODO: use useState to create a state variable to hold the state of the cart
  /* add your cart state code here */
  const [cart, setCart] = useState([]);
  const [cartTotal, setCartTotal] = useState(0);


  return (
    <div className="App" style={{
      display: 'flex',
      width: '70%'
    }}>
      <h1>My Bakery</h1> {/* TODO: personalize your bakery (if you want) */}
      {bakeryData.map((item, index) => ( // TODO: map bakeryData to BakeryItem components
        <BakeryItem  description={item.description} cart = {cart} setCartTotal = {setCartTotal} key={index}  item={item} name={item.name} price={item.price}/>
      ))}

      <div>
        <h2>Cart</h2>
        <ul>
        {cart.map(i => (<p>{i}</p>))}
        <p>Total: ${cartTotal}</p>
        </ul>
        

      </div>
    </div>
  );
}


export default App;
