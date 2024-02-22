import React from 'react'
import axios from 'axios';
import { useState, useEffect } from "react";
import {useNavigate} from 'react-router-dom'
function Home() {

    const [listOfPosts, setListOfPosts] = useState([]);

    const navigate = useNavigate();
    
    // Get all posts on load of the page.
    const handleClick = (id) => {
      // Now you can navigate programmatically to other pages using navigate
      navigate(`/post/${id}`); 
    };

    useEffect(() => {
      axios.get("http://localhost:3001/posts").then((res)=>{
        console.log("ress",res);
        setListOfPosts(res?.data);
      }).catch(err =>{
        console.log(err)
      })
    }, []);
  return (
    <div>
       {
        listOfPosts.map((value,key)=>{
          return <div className='post' onClick={()=> handleClick(value.id)} key={key}>
            <div className='title'>{value.title}</div>
            <div className='body'>{value.postText}</div>
            <div className='footer'>{value.username}</div>
          </div>
          
        })
      }
    </div>
  )
}

export default Home
