'use client';

import { Button, Checkbox, Label, Modal, TextInput, Select, Textarea } from 'flowbite-react';
import React, { useRef, useState, useEffect} from 'react';
import { useUserContext } from './UserContext';

function Component() {
  const [openModal, setOpenModal] = useState(false)
  const [categories, setCategories] = useState(null)
  const [title, setTitle] = useState()
  const [body, setBody] = useState()
  const [category, setCategory] = useState()

  let userId = localStorage.getItem('userId')
  console.log(userId)
  let token = localStorage.getItem('token')
  const handlerSubmit = async (event) => {
    event.preventDefault()
    try {
      const response = await fetch("http://localhost:2026/blog/posts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        
        body: JSON.stringify({title, body, userId, category})
      })
      if (response.ok){
        console.log(title)
        console.log(body)
        console.log(userId)
        console.log(category)
        const data = await response.json();
        const token = data.token
        const userId = data.userId
        localStorage.setItem("token", token)
        localStorage.setItem("userId", userId)   
      }
    } catch(e){
      console.error(e);
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
    } catch (e){
      console.error(e)
    }
  }

  if (!categories){
    return <p>Obteniendo datos del servidor...</p>
  }
  
  return (
    <>
      <Button onClick={() => setOpenModal(true)} className="fixed bottom-0 left-[96%] transform -translate-x-1/2 m-2 p-2  rounded-full">
        <svg className="w-6 h-6 text-tertiary dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"  viewBox="0 0 18 18">
        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 1v16M1 9h16"/>
        </svg>
      </Button>
      <Modal show={openModal} size="lg" popup onClose={() => setOpenModal(false)}>
        <Modal.Header />
        <Modal.Body>

          <div className="space-y-6">
            <form action="">
              <h3 className="text-2xl font-medium text-gray-900 dark:text-white">Crear nuevo posteo</h3>
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="title" value="Título" />
                </div>
                <TextInput onChange={(e) => setTitle(e.target.value)} id="title" placeholder="Mi título" required />
              </div>
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="body" value="Cuerpo del posteo" />
                </div>
                <Textarea onChange={(e) => setBody(e.target.value)} id="body" required />
              </div>
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="body" value="Cuerpo del posteo" />
                </div>
                <Select>
                  {
                    categories.map((currentCategory) => (
                      <option onChange={(e) => setCategory(e.target.value)} key={currentCategory._id} value={currentCategory._id} name="category">{currentCategory.name} </option>
                    ))
                  }
                </Select>
              </div>
              <div className="w-full">
                <Button onClick={handlerSubmit} type='submit'>Crear posteo</Button>
              </div>
            </form>
          </div>
        </Modal.Body>
      </Modal> 
    </>
  );
}

export default Component