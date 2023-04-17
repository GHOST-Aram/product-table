import React from 'react'

export const Product = ({product}) => {
  return (
    <tr>
      <td className={`text-left ${product.stocked && 'text-red'}`}> {product.name}</td>
      <td>{product.price}</td>
    </tr>
  )
}

export default Product