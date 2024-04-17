import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'
import { Spinner } from './Spinner.js';
import { BlogDetails } from './BlogDetails.js';
export const Blogs = () => {

    const {posts,loading}=useContext(AppContext);

  return (
    <div className='mt-[224px] w-11/12 max-w-[650px] py-8 flex flex-col gap-y-7 mb-[190px] justify-center items-center h-screen'>
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

                       <BlogDetails key={post.id} post={post}/>

                    ))
                )
            )
        }
    </div>
  )
}
