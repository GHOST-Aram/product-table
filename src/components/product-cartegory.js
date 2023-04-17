import Product from './product'
import React from 'react'

const ProductCategory = ({category, products}) => {
  return (
    // product = { category: "Fruits", price: "$1", stocked: true, name: "Apple" },
    <>
        <tr className='w-full'><th className='text-center'>{category}</th></tr>
        {
            products.map(product =>{
                return category === product.category && <Product product={product}/>
            })
        }
    </>
  )
}

export default ProductCategory