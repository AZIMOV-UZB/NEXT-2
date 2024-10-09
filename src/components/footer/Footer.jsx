import React from 'react'

const Footer = () => {
  return (
    <div className='bg-slate-100 mt-5 p-5 flex justify-between gap-10 flex-wrap container px-2'>
        <div className='w-72'> 
            <p className='text-2xl font-bold'>Funiro.</p> 
            <p className='text-gray-400 w-52 mt-5'>400 University Drive Suite 200 Coral Gables,
            FL 33134 USA</p>
        </div>
        <div className='w-72'>
            <p className='text-gray-400'>Links</p>
            <p>Home</p>
            <p className='text-[17px] mt-5 font-bold'>Shop</p>
            <p className='text-[17px] mt-5 font-bold'>About</p>
            <p className='text-[17px] mt-5 font-bold'>Contact</p>
             </div>
        <div className='w-72'> 
<p className='text-gray-400'>Help</p>
<p className='text-[17px] mt-5 font-bold'>Payment Options</p>
<p className='text-[17px] mt-5 font-bold'>Returns</p>
<p className='text-[17px] mt-5 font-bold'>Privacy Policies</p>
        </div>
        <div className='w-72'>
            <p className='text-gray-400' className='text-[17px] mt-5 font-bold' >Newsletter</p>
            <div className='flex gap-2 mt-5'>
            <p className='text-gray-400'>Enter Your Email Address</p>
<button>SUBSCRIBE</button>
            </div>
            
             </div>
    </div>
  )
}

export default Footer