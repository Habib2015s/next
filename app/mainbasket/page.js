"use client"
import React from "react";
import Basket from "../Basket";
import UseBasket from "../UseBasket";
export default function Page(){
    const {items}=UseBasket()
    return(
        <div>
            {items.map((item)=>{
                return <Basket productdata={item} key={item.id}/>
            })}


        </div>
    )
}