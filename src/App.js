import React, { useContext, useEffect } from "react";
import { Header } from "./components/Header";
import { Blogs } from "./components/Blogs";
import { Pagination } from "./components/Pagination";
import { AppContext } from "./context/AppContext";
import "./App.css"
import { Route,Routes, useLocation, useSearchParams } from "react-router-dom";
import { Home } from "./Pages/Home";
import { BlogPage } from "./Pages/BlogPage";
import { TagPage } from "./Pages/TagPage";
import { CategoryPage } from "./Pages/CategoryPage";

export default function App() {

  const {fetchBlogPosts}=useContext(AppContext);
  const [searchParams,setSearchParams]=useSearchParams();
  const location=useLocation();

  useEffect(()=>{
      const page=searchParams.get("page") ?? 1;

      if(location.pathname.includes("tags")){
        //iska matlab tag vala page show karna hai
        const tag=location.pathname.split("/").at(-1).replaceAll("-"," ");
        //split the url on the basis of '/' and retrive last element and replace '-' with ' '
        fetchBlogPosts(Number(page),tag);
      }else if(location.pathname.includes("categories")){
        const category=location.pathname.split("/").at(-1).replaceAll("-"," ");
        fetchBlogPosts(Number(page),null,category);

      }else{
        fetchBlogPosts(Number(page));
      }
  },[location.pathname,location.search])
  //whenever these to elements get changed execute useEffect, location.search contains page no, so whenever page changes we need to rerender


  return (
    <Routes>
      <Route path="/" element={<Home/>}> </Route>
      <Route path="/blog/:blogId" element={<BlogPage/>}> </Route>
      <Route path="/tags/:tag" element={<TagPage/>}> </Route>
      <Route path="/categories/:category" element={<CategoryPage/>}> </Route>

    </Routes>
  )
}
