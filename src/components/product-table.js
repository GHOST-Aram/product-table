import TableHeader from './table-head'
import ProductCategory from './product-cartegory'
import React from 'react'

const ProductTable = ({categories, products}) => {
  return (
    <table border={0}>
        <TableHeader />
        {
            categories.map(category => {
                return <ProductCategory category = {category} products =  {products} />
            })
        }
    </table>
  )
}

export default ProductTable