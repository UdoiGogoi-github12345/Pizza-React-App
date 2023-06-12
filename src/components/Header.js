import React from 'react'

function Header() {
  return (
    <div>
      <h2 className='font-roboto font-regular text-5xl text-[#edc84b] text-center mt-6 mb-3 block self-stretch'>
        __ FAST REACT PIZZA __ CO.
      </h2>
      <div className='mt-6 mb-6 '>
        <div className='w-1/6 border  border-t-2 border-b-2 border-l-0 border-r-0 border-black mx-auto'>
          <h3 className='font-roboto font-regular text-2xl text-center tracking-widest'>
            OUR MENU
          </h3>
        </div>
      </div>
      <p className='font-roboto font-light text-center mt-6 mb-6 mx-16'>
        Authentic Italian cuisine. 6 creative dishes to choose from. All from
        our stone oven, all organic, all delicious.
      </p>
    </div>
  )
}

export default Header
