import React from 'react'
import { Link, useParams } from 'react-router-dom';

const Form_delete = () => {
  let {postId} = useParams()
  console.log(postId)
  let token = localStorage.getItem('token')
  const handlerSubmit = async (event) => {
    event.preventDefault()
    try {
      const response = await fetch(`http://localhost:2026/blog/posts/${postId}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({postId, token})
      })
      if (response.ok){
        const data = await response.json();
        const token = data.token
        const userId = data.name
        localStorage.setItem("token", token)
        localStorage.setItem("userId", userId)   
      }
    } catch(e){
      console.error(e);
    }
  }
  return (
    <div>
        <form action="">
            <button onClick={handlerSubmit} className='bg-primary rounded p-1' type='submit'>Borrar posteo</button>
            <Link to={`/home`}  className='text-xl text-tertiary'>Back</Link>
        </form>
    </div>
  )
}

export default Form_delete