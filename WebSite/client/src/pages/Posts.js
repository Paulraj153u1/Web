import axios from 'axios';
import React, { useEffect } from 'react'
import {useParams} from 'react-router-dom'

function Posts() {
    let  {id} = useParams();

    useEffect(() => {
        axios.get("http://localhost:3001/posts").then((res)=>{
          console.log("ress",res);
        }).catch(err =>{
          console.log(err)
        })
      }, []);
  return (
    <div>
      {id}
    </div>
  )
}

export default Posts
