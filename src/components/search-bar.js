import React from 'react'

const SearchBar = () => {
  return (
    <div className=' container search-bar my-8'>
        <input type="text" name="keyword" id="key-search" placeholder='Search'
        className='py-1 px-1  w-full border-b-1 border-dark rounded-sm' />
        <div style={{display: 'inline-block'}} className='my-1'>
            <input type="checkbox" name="products_in_stock" id="products-in-stock" className='mr-2'/>
            <label htmlFor="products-in-stock">Only show products in stock</label>
        </div>
    </div>
  )
}

export default SearchBar