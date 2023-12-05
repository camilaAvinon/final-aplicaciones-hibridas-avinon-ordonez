import React from 'react'
import { Form_delete } from '../components'
import { useParams } from 'react-router-dom'

const View_posts_delete = () => {
  let {postId} = useParams()
  return (
    <div>
        <h2>Borrar posteo</h2>
        <Form_delete postId={postId} />
    </div>
  )
}

export default View_posts_delete