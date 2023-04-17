import ProductTable from './product-table';
import SearchBar from './search-bar'
import React from 'react'

const FilterableProductTable = () => {
  return (
    <div className='container px-2 rounded-md my-8'>
        <SearchBar />
        <ProductTable />
    </div>
  )
}

export default FilterableProductTable