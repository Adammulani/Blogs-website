import React from 'react'
import { Header } from '../components/Header'
import { useLocation, useNavigate } from 'react-router-dom'
import { Pagination } from '../components/Pagination';
import { Blogs } from '../components/Blogs';

export const CategoryPage = () => {
    const navigation=useNavigate();
    const location=useLocation();
    const category=location.pathname.split("/").at(-1);
  return (
    <div className='flex flex-col justify-center items-center'>
        <Header></Header>
        <div className='mt-[140px] w-11/12 max-w-[650px] py-8 flex flex-col gap-y-7  justify-center items-center h-screen'>
        <div className='flex gap-x-4 justify-center'>
       <button className='rounded-md border-2 py-1 px-4' onClick={()=>navigation(-1)}>
            Back
        </button>
        <h2 className='font-bold text-center'>
            Blogs on <span>{category}</span>
        </h2>
       </div>
       <Blogs/>
       <Pagination/>
        </div>
       
    </div>
  )
}
