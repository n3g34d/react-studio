// TODO: create a component that displays a single bakery item
import { useState } from 'react';

export default function BakeryItem(props) {
    const item = props.item; 
    const name = props.name; 
    const price = props.price; 

    const onClick = () => {
        {props.setCartTotal((count) => count + price)}
        {props.cart.push([name])}
    }

    return (
        
        <div
        style={{
            width: 'auto',
            border: 'solid 2px black',

        }}>
            <img src={item.image} style={{ width: '100%' }}></ img>
            <h1>{name}</h1>
            <p>{item.description}</p>
            <h2>${price}</h2>
            <button  style={{
                    width: 100,
                    height: 50,
                    justifyContent: 'center',
                    backgroundColor: 'lightyellow',
                    marginBottom: 10
                }}
                onClick = {onClick} class = "button"> ADD TO CART </button>
            
        </div>
    )
}