import React, { useState } from 'react'

function SearchBar ({itemsList, setFilteredItemsList}) {

  const [checked, setChecked] = useState(false)

  const handleSearch = (event) => {
    const searchText = event.target.value.toLowerCase()
    let filteredList = itemsList.filter((item) => item.name.toLowerCase().includes(searchText))
    if (checked) {
      filteredList = filteredList.filter((item) => item.inStock)
    }
    setFilteredItemsList(filteredList)
  }

  const handleCheckbox = () => {
    setChecked(!checked)
    let filteredList = itemsList
    if (!checked) {
      filteredList = itemsList.filter((item) => item.inStock)
    }
    setFilteredItemsList(filteredList)
  }

  return (
    <div className='SearchBar'>
      <label htmlFor='search'>Search</label>
      <input type='text' onChange={handleSearch} placeholder='Search item here'/>
      
      <div className='CheckBox'>
        <label htmlFor='inStock'>
        <input type='checkbox' id='inStock' checked={checked} onChange={handleCheckbox} />
        only show products in stock</label>
      </div>
    </div>
  )
}

export default SearchBar
