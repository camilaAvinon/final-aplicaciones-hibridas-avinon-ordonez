import React, {useEffect, useState} from 'react'
import { Card, Button } from 'flowbite-react';
import { Link } from 'react-router-dom';

function Card_post() {
  const [posts, setPosts] = useState(null)
  useEffect(() => {
    callingPosts();
  }, []);
  
  const callingPosts = async () => {
    try {
      const response = await fetch("http://localhost:2026/blog/posts")
      if (response.ok) {
        const data = await response.json()
        setPosts(data.data)
      } else {
        console.error(response.status,response.statusText);
      }
    } catch (error) {
      console.log(error);
    }
  }
  if (!posts){
    return <p>Obteniendo datos del servidor...</p>
  }
  return (
    <div>
      {
        posts.map((post) => (
          <Card key={post._id} className="max-w-sm mb-[2em]">
              <h5 className='text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>{post.title}</h5>
              <p className='font-normal text-gray-700 dark:text-gray-400'>{post.body}</p>
              <button className='bg-primary rounded p-1'>Ver más</button>
              <Link to={`/delete_post/${post._id}`}>Eliminar</Link>
          </Card>
        ))
      }
    </div>
  );
}

export default Card_post