import React, { useEffect, useState } from "react";
import axios from 'axios';
import './index.css';
import Sidebar from "./Sidebar.js";

function App () {
  const [isCardView,setlsCardView]= useState(true)

  const [isLoading,setIsLoading] =  useState(true);
  const [posts,setPosts] = useState([]);
  const [error,setError] = useState(null);
  
  useEffect (() => {
    axios.get('https://jsonplaceholder.typicode.com/posts')
    .then(response => {
      setPosts (response.data);
      setIsLoading(false);
    })
    .catch(error => {
      setError(error);
      setIsLoading(false);
    });

  }, []);


  const removeCard = (postId) => {
    const updatedPosts = posts.filter (post => post.id !== postId);
    setPosts(updatedPosts);
  };

  if(isLoading) {
    return <div>Loading...</div>
  }
  if(error) {
    return <div>Error: {error.message}</div>;
  }
  
  const truncateString = (str,num) => {
    if(str?.length > num){
      return str.slice(0,num)+ '......'
    }
    else {
      return str;
    }
    
  }
  return (
     <>
     <div className=" flex bg-blue-100" >
     <div className="">
     <Sidebar isCardView = {isCardView} setlsCardView = {setlsCardView}/>

     </div>
      {isCardView ? (
        <div className="card-container m-auto">
        
        {posts.map(post => (
          <div key={post.id} className="card">
            <div className="round-image">
            <img src={`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKy5BbZG_BuFvZ76iSsRyEhNtSvcLDKg8Siw&usqp=CAU${post.id}`}alt={`Image${post.id}`} />
            </div>
            <div className="card-content">
            {truncateString(post.title,50)}
            <br/>
            {truncateString(post.body,50)}
            </div> 
            <button onClick={() => removeCard(post.id)} className="cancel-button text-red-600 font-bold text-lg">X</button> 
          </div>

        ))}
      </div>
      ): (
        
        <div className="card-container m-auto">
        {posts.map(post => (
          <div key={post.id} className="card2">
            <div className="card-content2 ">
            <button onClick={() => removeCard(post.id)} className="cancel-button2 text-red-600 font-bold text-lg">X</button> 
           <div className="font-bold text-xl">

           {truncateString(post.title,20)}
           </div>
             <br/>
             <div className="text-base font-normal">
           {truncateString(post.body,40)}
           </div>
           
       </div> 
            <div className="object-cover h-32 w-65">
            <img src={`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKy5BbZG_BuFvZ76iSsRyEhNtSvcLDKg8Siw&usqp=CAU${post.id}`}alt={`Image${post.id}`} />
            </div>
            
          </div>

        ))}
      </div>
      )}
     
      </div>
     </>
  
  );
}
export default App;