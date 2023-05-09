import { StarIcon } from '@heroicons/react/solid'
import Image from 'next/image'
import React , {useState}from 'react'
import Currency from 'react-currency-formatter'

function Product({id , title , price , description , category , image , rating}) {
    // const [hasPrime] = useState(Math.random() < 0.8)
  return (
    <div className='relative flex flex-col p-10 m-5 bg-white z-30'>
      <p className='absolute top-2 right-2 italic'>{category}</p>
      <Image className='m-auto' src={image} height={200} width={200} objectFit='contain' alt=''/>
      <h4 className='my-3 text-lg font-bold'>{title}</h4>
      <div className='flex mb-2'>
        {Array(Math.floor(rating.rate)).fill().map((_ , i)=>
             <StarIcon className='h-5 text-yellow-500' />
        )}
      </div>
      <p className='mb-2 line-clamp-2'>{description}</p>
      <div className='font-bold text-lg'>
        <Currency quantity={price} currency='INR' />
      </div>  
      {/* {hasPrime && (
        <div>
            <img src='https://links.papareact.com/fdw' alt='' />
            <p>Free Delivery Next day</p>
        </div>
      )} */}
      <button className='button mt-2 font-bold'>
        Add to basket
      </button>
    </div>
  )
}

export default Product
