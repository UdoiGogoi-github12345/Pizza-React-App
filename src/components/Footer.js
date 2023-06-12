import React from 'react'
import Order from './Order'

function Footer() {
  const date = new Date()
  const hour = date.getHours()
  const openHour = 12
  const closeHour = 22
  const isOpen = hour >= openHour && hour <= closeHour
  return (
    <>
      {isOpen ? (
        <>
          <Order />
          <p className='text-center font-roboto font-regular text-md mb-6'>
            We're happy to welcome you!.
          </p>
          <div className='bg-orange-400 h-6'></div>
        </>
      ) : (
        <div>
          <p className='text-center font-roboto font-regular text-2xl mb-6'>
            We're happy to welcome you between {openHour}:00 and {closeHour}:00.
          </p>
          <div className='bg-orange-400 h-6'></div>
        </div>
      )}
    </>
  )
}

export default Footer
