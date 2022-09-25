import React from 'react'
import './OneProduct.css'

export default function OneProduct(props) {
  return (
    <div className='oneProduct'>
        <div>
            <b>product Name</b> {props.productName}
        </div>
        <div>
            <b>product Price</b> {props.price}
        </div>
    </div>
  )
}
