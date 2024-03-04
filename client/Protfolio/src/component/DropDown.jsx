import React from 'react'

const DropDown = () => {


  return (
   <div className='bg-sky-500 w-[5.2vw]  border-none mt-4 rounded-b-lg'>

        <div>
            <ul className=' border-b-2'>
                <li className='border-b-2 text-white hover:bg-green-400 hover:text-black cursor-pointer'>Instagram</li>
                <li className='border-b-2 text-white hover:bg-green-400 hover:text-black cursor-pointer'>Whatsapp</li>
                <li className='border-b-2 text-white hover:bg-green-400 hover:text-black cursor-pointer'>Mail</li>
            </ul>
        </div>

   </div>
  )
}

export default DropDown