import React from 'react';
import Image from 'next/image';
import {
    MenuIcon,
    ShoppingCartIcon,
    SearchIcon,
} from "@heroicons/react/outline"

function Header() {
  return (
    <>
    {/* first container */}
    <div className='flex  items-center bg-amazon_blue p-1 flex-grow py-2'>
      <div className='mt-2 flex items-center h-10 flex-grow sm:flex-grow-0 mr-2'>
        <Image
            src={'https://links.papareact.com/f90'}
            width={150}
            height={40}
            objectFit={'contain'}
            className='cursor-pointer'
            alt=''
        />
      </div>
      {/* search */}
      <div className='hidden h-10 sm:flex items-center flex-grow bg-yellow-400 rounded-md'>
        <input type='text' className='p-2 h-full w-6 flex-grow flex-shrink rounded-l-md focus:outline-none'/>
        <SearchIcon className='h-12 p-4 cursor-pointer' />
      </div>
      {/* basket */}
      <div className='text-white flex items-center mx-6 space-x-6 text-sm'>
        <div className='link'>
            <p>Hello sanaka</p>
            <p>Accounts & Lists</p>
        </div>
        <div className='link'>
            <p>Returns</p>
            <p>& Orders</p>
        </div>
        <div className='relative link flex items-center'>
            <span className='absolute top-0 right-0 h-5 w-4 md:right-12 text-center text-black font-bold bg-yellow-400 rounded-full'>0</span>
            <ShoppingCartIcon className='h-10' />
            <p className='hidden md:inline font-extrabold md:text-sm'>Basket</p>
        </div>
      </div>
      {/* Electronics */}
      
    </div>
    {/* second container */}
    <div className='flex items-center bg-amazon_blue-light text-white space-x-3 p-2 pl-6 text-sm'>
      <p className='link flex items-center'>
      <MenuIcon className='flex h-6 mr-1' />
      All
      </p>
      <p className='link'>Prime Video</p>
      <p className='link'>Amazon Business</p>
      <p className='link'>Today's Deals</p>
      <p className='link hidden lg:inline-flex'>Electronics</p>
      <p className='link hidden lg:inline-flex'>Food & Grocery</p>
      <p className='link hidden lg:inline-flex'>Prime</p>
      <p className='link hidden lg:inline-flex'>Buy Again</p>
      <p className='link hidden lg:inline-flex'>Shopper Toolkit</p>
      <p className='link hidden lg:inline-flex'>Health & Personal Care</p>
    </div>
    </>
  )
}

export default Header
