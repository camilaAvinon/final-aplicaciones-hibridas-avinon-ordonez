
import { Button, Label, TextInput, Select, Textarea } from 'flowbite-react';
import React, { useState, useEffect } from 'react';
import {Link, Routes, Route, useNavigate} from 'react-router-dom';



const Form_edit = (postId) => {
  const id = postId.postId;
  const [categories, setCategories] = useState(null)
  const [post, setPost] = useState(null)
  const [title, setTitle] = useState()
  const [body, setBody] = useState()
  const [category, setCategory] = useState()
  const navigate = useNavigate()

  useEffect(() => {
    callingPosts();
  }, []);
  
  const callingPosts = async () => {
    try {
      const response = await fetch(`http://localhost:2026/blog/posts/${id}`)
        const data = await response.json()
        setPost(data.data)
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

  const handlerSubmit = async (event) => {
    event.preventDefault()
    try {
      const response = await fetch(`http://localhost:2026/blog/posts/${id}`, {
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
      }
      navigate('/home');
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
        <TextInput id="title" defaultValue={post.title} onChange={(e) => setTitle(e.target.value)} placeholder="Mi título" required />
      </div>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="body" value="Cuerpo del posteo" />
        </div>
        <Textarea id="body" defaultValue={post.body} onChange={(e)=>setBody(e.target.value)} required />
      </div>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="body" defaultValue="Cuerpo del posteo" />
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
        <Button onClick={handlerSubmit} type='submit'>Actualizar posteo</Button>
      </div>
    </form>
  </div>
  );
}

export default Form_edit