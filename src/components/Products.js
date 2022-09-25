import React from 'react'
import OneProduct from './OneProduct';
import './Products.css';

export default function Products() {
  const storeProducts = [
    {id: 'p01', productName: 'lipton Tea', price: '20.45 LE'},
    {id: 'p02', productName: 'Pepsi', price: '10.11 LE'},
    {id: 'p03', productName: 'Chepsi', price: '9.00 LE'},
  ];

  return (
    <div className='products'>
        {
            storeProducts.map(function(product) {
                return <OneProduct
                            key={product.id}
                            productName={product.productName}
                            price={product.price}
                        />
            })
        }        
    </div>
  )
}
