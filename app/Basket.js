'use client';
import React from 'react';
import UseBasket from './UseBasket';
import ProductModal from './modal/ProductModal';
import Header from './Header';

export default function Basket() {
    const {invoice,items} =UseBasket()
  const [selectedProduct, setSelectedProduct] = React.useState(null);

  const handleProductClick = (product) => {
    setSelectedProduct(product);
  };

  return (
    <div className="min-h-screen p-6">
      <Header />

      <h2 className="text-black mt-16">TotalPrice: {invoice.totalPrice}</h2>
      {items.length === 0 ? (
        <p className="mt-32 text-center text-gray-500">سبد خرید شما خالی است.</p>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-10">
          {items.map((product) => (
            <div
              key={product.id}
              className="border p-4 rounded shadow-lg cursor-pointer"
              onClick={() => handleProductClick(product)}
            >
              <img src={product.thumbnail} alt={product.title} />
              <h2 className='text-black'>{product.title}</h2>
              <p className='text-black'>quantity: {product.quantity}</p>
              <p className='text-black'>${product.price}</p>
            </div>
          ))}
        </div>
      )}

    
    </div>
  );
}
