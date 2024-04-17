import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { Blogs } from '../components/Blogs';
import { Pagination } from '../components/Pagination';
import { Header } from '../components/Header';

export const TagPage = () => {
    const navigation=useNavigate();
    const location=useLocation();
    const tag=location.pathname.split("/").at(-1);
  return (
    <div className='mb-[190px] flex flex-col justify-center items-center'><Header></Header>
      <div className='mt-[50px] w-11/12 max-w-[650px] py-8 flex flex-col gap-y-7  justify-center items-center h-screen'>
        
        <div className='flex gap-x-5'>
        <button className='rounded-md border-2 py-1 px-4' onClick={()=>navigation(-1)}>
            back
        </button>
        <h2 className='font-bold'>
            Bolgs tagged <span>{tag}</span>
        </h2>
        </div>
        <Blogs/>
        <Pagination/>
      </div>
    </div>
  )
}
