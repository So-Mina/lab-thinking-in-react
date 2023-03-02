import React, { useState, useEffect } from 'react'
import productsList from '../../data.json'
import ProductTable from './ProductTable/ProductTable'
import SearchBar from './SearchBar/SearchBar'

function ProductsPage() {
  const [products] = useState(productsList)
  const [filteredProducts, setFilteredProducts] = useState(productsList)
  const [showOnlyInStock, setShowOnlyInStock] = useState(false)

  useEffect(() => {
    if (showOnlyInStock) {
      setFilteredProducts(products.filter((product) => product.inStock))
    } else {
      setFilteredProducts(products)
    }
  }, [showOnlyInStock, products])

  const handleFilter = (filteredProducts) => {
    setFilteredProducts(filteredProducts)
  }

  return (
    <div className='ProductsPage'>
      <h1>IronStore</h1>
      <SearchBar
        itemsList={products}
        setFilteredItemsList={handleFilter}
        showOnlyInStock={showOnlyInStock}
        setShowOnlyInStock={setShowOnlyInStock}
      />
      <ProductTable products={filteredProducts} />
    </div>
  )
}

export default ProductsPage