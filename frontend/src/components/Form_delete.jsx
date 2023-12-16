import React from 'react'
import { Link, useNavigate } from 'react-router-dom';

const Form_delete = (postId) => {
  const navigate = useNavigate()
  const id = postId.postId;
  let token = localStorage.getItem('token')
  const handlerSubmit = async (event) => {
    event.preventDefault()
    try {
      const response = await fetch(`http://localhost:2026/blog/posts/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({id, token})
      })
      if (response.ok){
        const data = await response.json()
        const token = data.token
        localStorage.setItem("token", token)
      }
      navigate('/home')
    } catch(e){
      console.error(e);
    }
  }
  return (
    <div className=" flex flex-col justify-center items-center">
        <form action="" className="flex max-w-md flex-col gap-4 justify-center w-full">
          <h1>¿Estás seguro que querés borrar este posteo?</h1>
            <button onClick={handlerSubmit} className='bg-primary rounded p-1' type='submit'>Borrar posteo</button>
            <Link to={`/home`}  className='text-xl text-tertiary'>Volver</Link>
        </form>
    </div>
  )
}

export default Form_delete