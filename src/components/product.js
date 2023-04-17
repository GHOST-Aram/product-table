import React from 'react'

export const Product = ({name, price}) => {
  return (
    <tr><td className='text-left'>{name}</td><td>{price}</td></tr>
  )
}

export default Product