
import { Button, Label, TextInput, Select, Textarea } from 'flowbite-react';
import React, { useState, useEffect } from 'react';

const Form_edit = (postId) => {
  const id = postId.postId;
  const [categories, setCategories] = useState(null)
  const [post, setPost] = useState(null)
  const [title, setTitle] = useState()
  const [body, setBody] = useState()
  const [category, setCategory] = useState()

  useEffect(() => {
    callingPosts();
  }, []);
  
  const callingPosts = async () => {
    try {
      const response = await fetch(`http://localhost:2026/blog/posts/${id}`)
      if (response.ok) {
        const data = await response.json()
        console.log('entré')
        setPost(data.data)
      } else {
        console.error(response.status,response.statusText);
      }
    } catch (error) {
      console.log(error);
    }
  }
  
  useEffect(() => {
    callingCategories();
  }, []);
  
  const callingCategories = async () => {
    try {
      const response = await fetch ("http://localhost:2026/blog/categories")
      if (response.ok){
        const data = await response.json()
        setCategories(data.data)
      } else {
        console.error(response.status,response.statusText);
      }
    } catch (e) {
      console.error(e)
    }
  }

  if (!categories){
    return <p>Obteniendo datos del servidor...</p>
  }

  const handlerSubmit = async () => {
    try {
      const response = await fetch("http://localhost:2026/blog/posts", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({title, body, category})
      })
      if (response.ok){
        const data = await response.json();
        const token = data.token
        const userName = data.name
        localStorage.setItem("token", token)
        localStorage.setItem("userName", userName)
        login({userName : userName})
      }
    } catch(e){
      console.error(e);
    }
  }

  return (
  <div className="space-y-6">
    <form action="">
      <h3 className="text-2xl font-medium text-gray-900 dark:text-white">Editar posteo</h3>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="title" value="Título" />
        </div>
        <TextInput id="title" value={post.title} onChange={(e)=>setTitle(e.value)} placeholder="Mi título" required />
      </div>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="body" value="Cuerpo del posteo" />
        </div>
        <Textarea id="body" value={post.body} onChange={(e)=>setBody(e.value)} required />
      </div>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="body" value="Cuerpo del posteo" />
        </div>
        <Select>
          {
            categories.map((currentCategory) => (
              <option key={currentCategory._id} value={currentCategory._id}>{currentCategory.name}</option>
            ))
          }
        </Select>
      </div>
      <div className="w-full">
        <Button onClick={handlerSubmit} type='submit'>Crear posteo</Button>
      </div>
    </form>
  </div>
  );
}

export default Form_edit