import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'
import { Spinner } from './Spinner.js';
export const Blogs = () => {

    const {posts,loading}=useContext(AppContext);

  return (
    <div className='mt-[64px] w-11/12 max-w-[650px] py-8 flex flex-col gap-y-7'>
        {
            loading ? <Spinner/>:
            (
                posts.length===0?(
                    <div>
                        <p>No post found</p>
                    </div>
                ):
                (
                    posts.map((post)=>(

                        <div key={post.id}>
                            <p className='font-bold text-lg'>{post.title}</p>
                            <p className='text-sm'>
                                By <span className='italic'>{post.author}</span> on <span className='underline bold'>{post.category}</span>
                            </p>
                            <p className='text-sm mt-[4px]'>Posted on {post.date}</p>
                            <p className='text-md mt-[14px]'>{post.content}</p>
                            <div className='flex gap-x-3'>
                                {post.tags.map((tag,index)=>{
                                    return <span key={index} className='mt-[5px] text-blue-500 font-bold text-xs underline'>{`#${tag} `}</span>
                                })}
                            </div>
                        </div>

                    ))
                )
            )
        }
    </div>
  )
}
