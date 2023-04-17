import TableHeader from './table-head'
import ProductCategory from './product-cartegory'
import React from 'react'

const ProductTable = ({products}) => {

  //Extract categories
  let categories = []
  products.forEach(product => {
    if(!categories.includes(product.category))
        categories = [...categories, product.category] 
  });
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