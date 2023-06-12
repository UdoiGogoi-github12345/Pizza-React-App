import React from 'react'
import Card from './Card'
function Cards({ p }) {
  return (
    <div className='flex justify-center items-center mx-4 mt-10 mb-8'>
      <div className='grid grid-cols-1 gap-y-12 md:grid-cols-2 md:gap-x-6 md:gap-y-12'>
        {p.map((pizza) => {
          return (
            <div className='max-w-md' key={pizza.id}>
              <Card
                name={pizza.name}
                description={pizza.description}
                qty={pizza.qty}
                imglink={pizza.imglink}
                soldOut={pizza.soldOut}
              />
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Cards
