
import './App.css';
import axios from 'axios';
import { useState, useEffect } from "react";

function App() {

  const [listOfPosts, setListOfPosts] = useState([]);


  useEffect(() => {
    axios.get("http://localhost:3001/posts").then((res)=>{
      console.log("ress",res);
      setListOfPosts(res?.data);
    }).catch(err =>{
      console.log(err)
    })
  }, []);


  return (
    <div className="App">
      {
        listOfPosts.map((value,key)=>{
          return <div className='post'>
            <div className='title'>{value.title}</div>
            <div className='body'>{value.postText}</div>
            <div className='footer'>{value.username}</div>
          </div>
          
        })
      }
    </div>
  );
}

export default App;
