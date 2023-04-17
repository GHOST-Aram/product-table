import FilterableProductTable from './components/filterable-product-table';
import './App.css';
// import { useState } from 'react';

function App() {
  const products = [
    { category: "Fruits", price: "$1", stocked: true, name: "Apple" },
    { category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit" },
    { category: "Fruits", price: "$2", stocked: false, name: "Passionfruit" },
    { category: "Vegetables", price: "$2", stocked: true, name: "Spinach" },
    { category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin" },
    { category: "Vegetables", price: "$1", stocked: true, name: "Peas" }
  ]
  let categories = []
  products.forEach(product => {
    if(!categories.includes(product.category))
        categories = [...categories, product.category] 
  });
  return (
    <div className="App">
      <FilterableProductTable categories={categories} products = {products} />  
    </div>
  );
}

export default App;
