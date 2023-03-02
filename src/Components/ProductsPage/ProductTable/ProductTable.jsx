import React from 'react'
import ProductRow from './ProductRow/ProductRow'

const ProductTable = ({products}) => {
  
  return (

    <div className='ProductTable'>

      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {products.map(product => (
            <ProductRow key={product.id} product={product} />
          ))}
        </tbody>
      </table>

    </div>
  )
}

export default ProductTable