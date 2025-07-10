import React, { useEffect, useState } from 'react'
import Counter from '../Counter';
import UseBasket from '../UseBasket';
'use client'

export default function  Basket  ({ product})  {
  
  
  const { id, title,thumbnail, price, description } = product;
  const [quantity, setQuantity] = useState(product.quantity ||0 );
  const editItem = UseBasket((state) => state.actions.editItem);
  const setTotalPrice = UseBasket((state) => state.actions.setPrice);
  
  const handleClick=(amount) =>{
    if (amount > 0) {
      setQuantity((prev) =>prev + amount< 999 ?prev + amount : prev);
    }
    else {
      setQuantity((prev) =>prev + amount>= 0 ?prev + amount : prev);
    }
  }
  
  const handleChange=()=> {
    const newValue = Number();
    if (newValue) {
      setQuantity(newValue);
    }
    else {
      setQuantity(0);
    }
  }
  
  useEffect(() => {
    if (product) {
      editItem({ id, quantity, price })
      setTotalPrice();
    }
  }, [quantity]);
  
  return (
    <div className="grid grid-rows-[2fr_1fr] gap-x-5 gap-y-5 sm:grid-rows-none sm:grid-cols-[150px_1fr] items-center mb-2 bg-gray-100 p-2">
          <div className="flex flex-col items-center">
              <img src={thumbnail} alt="image" className='w-28' />
              <br/>
              <Counter quantity={quantity} handleChange={handleChange} handleClick={handleClick} />
          </div>
          <div className="flex justify-between gap-x-2">
              <div>
                  <h3 className="clamp-text w-[70%] text-lg">{title}</h3>
                  <p>{description}</p>
                  
              </div>
              <div>
                  <p className=" font-bold">{price}$</p>
              </div>
          </div>
      </div>
  )
}

