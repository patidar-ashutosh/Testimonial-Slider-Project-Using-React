import React from 'react'
import {FaQuoteLeft, FaQuoteRight} from 'react-icons/fa';

const Card = (props) => {
  let review = props.review;

  return (
    <div className='flex flex-col md:relative'>
      <div className='relative mx-auto md:absolute md:top-[-7rem] z-[10]'>
        <img 
        className="aspect-square rounded-full object-cover w-[140px] h-[140px] z-[25]"
        src={review.image} alt=''/>
        <div className='w-[140px] h-[140px] bg-violet-500 rounded-full absolute
         top-[-6px] z-[-10] left-[10px]'></div>
      </div>
      
      <div className='text-center mt-7'>
        <p className='font-bold text-lg md:text-2xl tracking-wider capitalize'>{review.name}</p>
        <p className='text-violet-300 uppercase text-sm'>{review.job}</p>
      </div>

      <div className='text-violet-400 w-fit mx-auto mt-5'>
        <FaQuoteLeft/>
      </div>

      <div className='text-center mt-4 text-slate-500'>
        {review.text}
      </div>

      <div  className='text-violet-400 w-fit mx-auto mt-5 mb-5'>
        <FaQuoteRight/>
      </div>
    </div>
  )
}

export default Card;