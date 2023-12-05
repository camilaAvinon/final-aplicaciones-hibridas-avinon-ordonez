import React from 'react'
import { Link, useParams } from 'react-router-dom';

const Form_delete = (postId) => {
  // let {postId} = useParams()
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