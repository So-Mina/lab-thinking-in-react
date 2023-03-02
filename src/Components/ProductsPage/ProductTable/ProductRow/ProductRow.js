import React from 'react'

function ProductRow(props) {
  const { name, price, inStock } = props.product
  const outOfStockClass = inStock ? '' : 'out-of-stock'

  return (
    <tr className={outOfStockClass}>
      <td>{name}</td>
      <td>{price}</td>
    </tr>
  )
}

export default ProductRow
