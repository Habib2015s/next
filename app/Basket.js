'use client';
import React from 'react';
import UseBasket from './UseBasket';
import Header from './Header';

export default function Basket() {
  const { items, invoice, actions } = UseBasket();
  const [selectedProduct, setSelectedProduct] = React.useState(null);

  const handleProductClick = (product) => {
    setSelectedProduct(product);
  };

  return (
    <div className="min-h-screen p-6">
      <Header />
      <h2 className="text-black mt-16">Total Price: {invoice.totalPrice}</h2>

      {items.length === 0 ? (
        <p className="mt-32 text-center text-gray-500">Basket is Empty </p>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-10">
          {items.map((product) => (
            <div
              key={product.id}
              className="border p-4 rounded shadow-lg cursor-pointer"
              onClick={() => handleProductClick(product)}
            >
              <img src={product.thumbnail} alt={product.title} />
              <h2 className="text-black">{product.title}</h2>
              <p className="text-black">Quantity: {product.quantity}</p>
              <p className="text-black">${product.price}</p>
              <div className='flex justify-center'>

              <button
                onClick={(e) => {
                  e.stopPropagation(); // جلوگیری از باز شدن جزئیات با کلیک روی دکمه
                  actions.removeFromBasket(product);
                }}
                className="rounded-md p-2 hover:scale-95 bg-red-500 text-black flex justify-center 
                cursor-pointer duration-150 hover:shadow-lg transition-transform mt-2"
                >
                Remove from Basket
              </button>
                </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
