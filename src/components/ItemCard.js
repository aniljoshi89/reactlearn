import React, { useState } from 'react';
import './itemCard.css';
import vegImg from '../images/veg.jpg'
import nonvegImg from '../images/non-veg.jpg'


const ItemCard = (props) => {
  const { itemData } = props;
  const [count, setCount] = useState(0);
  return (
    
    <div className="item-card">
     <div className='item-heading'> <h4>{itemData.item}</h4>
         {itemData.type==="Veg"?
        <img src={vegImg} style={{width:"10%"}}></img> : <img src={nonvegImg} style={{width:"10%"}}></img> }   </div>
      <p className="price">Price: {itemData.price}</p>
     {
     (count===0) ? (<button onClick={()=>setCount(count+1)}>Add to Cart</button>)
     :(<div><button onClick={()=>setCount(count+1)}> + </ button> {count} <button onClick={()=>{setCount(count-1)}}> - </ button> </div>)
     } 
    
    </div>
  );
};

export default ItemCard;
