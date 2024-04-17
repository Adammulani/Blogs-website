import React from 'react'
import { Header } from "../components/Header";
import { Blogs } from "../components/Blogs";
import { Pagination } from "../components/Pagination";
import "../App.css"

export const Home = () => {
  return (
    <div><div className="w-full h-full flex flex-col gap-y-1 justify-center items-center">
    <Header/>
    <div className='mt-[70px]'>
       <Blogs/>
    </div>
    
    <Pagination/>

  </div></div>
  )
}
