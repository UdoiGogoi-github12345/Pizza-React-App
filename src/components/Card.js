import React from 'react'

function Card({ name, description, qty, imglink, soldOut }) {
  const textClasses = `${soldOut ? 'text-gray-400' : 'text-black'} font-roboto`
  return (
    <div className='flex flex-row gap-x-8'>
      <img
        src={imglink}
        className={`w-1/2 h-1/2 object-contain rounded-full ${
          soldOut ? 'filter grayscale' : ''
        }`}
      ></img>

      <div className='flex flex-col gap-y-2'>
        <h1 className={`${textClasses} font-regular text-2xl`}>{name}</h1>
        <h3 className={`${textClasses} font-thin italic text-md`}>
          {description}
        </h3>
        <h3 className={`${textClasses} font-regular`}>{qty}</h3>
      </div>
    </div>
  )
}

export default Card
