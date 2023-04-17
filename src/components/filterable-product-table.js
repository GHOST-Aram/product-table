import ProductTable from './product-table';
import SearchBar from './search-bar'
import React from 'react'

const FilterableProductTable = ({categories, products}) => {
  return (
    <div className='container px-2 rounded-md my-8'>
        <SearchBar />
        <ProductTable categories={categories} products = {products}/>
    </div>
  )
}

export default FilterableProductTable