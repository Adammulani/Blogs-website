import React from 'react'
import { NavLink } from 'react-router-dom'

export const BlogDetails = ({post}) => {
  return (
    <div > 
        <NavLink to={`/blog/${post.id}`}>
            <span className='font-bold text-lg'>{post.title}</span>
        </NavLink>
        <p className='text-sm'> 
            By
                <span className='italic'>{post.author}</span> on {" "}
                <NavLink to={`/categories/${post.category.replaceAll(" ","-")}`}>
                    <span className='italic'>{post.category}</span>
                </NavLink>
            </p>
            <p className='text-sm mt-[4px]'> Posted on {post.date}</p>
            <p className='text-md mt-[14px]'> {post.content}</p>
            <div className='flex gap-x-3'>
               {
                 post.tags.map((tag,index)=>(
                    <NavLink key={index} to={`/tags/${tag.replaceAll(" ","-")}`}>
                       <span className='mt-[5px] text-blue-500 font-bold text-xs underline'>{`#${tag}`}</span>
                    </NavLink>
                    
                 ))
               }
            </div>
    </div>
  )
}
