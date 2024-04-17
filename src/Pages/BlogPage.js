import React, { useContext, useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import { AppContext } from '../context/AppContext';
import { baseUrl } from '../baseUrl';
import { Header } from '../components/Header';
import { Spinner } from '../components/Spinner';
import { BlogDetails } from '../components/BlogDetails';

export const BlogPage = () => {
    const newBaseUrl="https://codehelp-apis.vercel.app/api/"
    const [blog,setBlog] = useState(null);
    const [relatedBlogs,setRelatedBlogs]=useState([]);
    const location=useLocation();
    const navigation=useNavigate();
    const {loading,setLoading}=useContext(AppContext);

    const blogId=location.pathname.split("/").at(-1);

    async function fetchRelatedBlogs(){
        setLoading(true);
        let url=`${newBaseUrl}get-blog?blogId=${blogId}`;
        try{
            const res=await fetch(url);
            const data=await res.json();

            setBlog(data.blog);
            setRelatedBlogs(data.relatedBlogs);

        }
        catch(error){
            console.log("Some error occured in BlogPage while fetching data");
            setBlog(null);
            setRelatedBlogs([]);

        }
           setLoading(false);
    }
    useEffect(()=>{
        if(blogId){
            fetchRelatedBlogs();
        }
        console.log(" Printing blog value inside BlogPage"+blog);
    console.log("printing relatedBlogs value");
    console.log(relatedBlogs);
    },[location.pathname])
    
  return (
    <div>
        <Header/>
        <button onClick={()=> navigation(-1)}>
            Back
        </button>
        {
            loading ? <Spinner/> : 
            (blog?(
                <div>
                    <BlogDetails post={blog}/>
                    <h2>Related Blogs</h2>
                    {
                        relatedBlogs.map((post)=>(
                            
                            <div key={post.id}>
                                <BlogDetails post={post}/>
                                </div>
                               
                        ))
                    }
                    </div>
                    
            ):(<p>No blog found</p>))
        }
    </div>
  )
}
