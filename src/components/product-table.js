import TableHeader from './table-head'
import ProductCategory from './product-cartegory'
import React from 'react'

const ProductTable = () => {
  return (
    <table border={0}>
        <TableHeader />
        <ProductCategory />
    </table>
  )
}

export default ProductTable