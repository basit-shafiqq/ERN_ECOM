import React from 'react'
import { LATEST } from '../assets/data'
import Item from './Item'

function NewCollections() {
  return (
    <section className="max-w-6xl mx-auto py-10 px-6">
    <div>
      {/* Heading Section */}
      <h3 className="text-2xl font-bold text-gray-800 mb-3">New Collection</h3>
      <hr className="border-t-2 border-gray-300 mb-6" />

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {LATEST.map((item) => (
          <Item 
            key={item.id} 
            id={item.id} 
            image={item.image} 
            name={item.name} 
            new_price={item.new_price} 
            old_price={item.old_price} 
          />
        ))}
      </div>
    </div>
  </section>
  )
}

export default NewCollections