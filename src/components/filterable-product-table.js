import ProductTable from './product-table';
import SearchBar from './search-bar'
import React from 'react'
import { useState } from 'react';

const FilterableProductTable = ({products}) => {
  const [filterText, setFilterText] = useState('Fruit')
  const [inStockOnly, setInstock] = useState(false)

  
  return (
    <div className='container px-2 rounded-md my-8'>
        <SearchBar filterText={filterText} inStockOnly = {inStockOnly} 
          onFiltertTextChange = {setFilterText} onStockOnlyChange = {setInstock}
        />
        <ProductTable filterText={filterText} inStockOnly = {inStockOnly}
         products = {products}/>
    </div>
  )
}

export default FilterableProductTable