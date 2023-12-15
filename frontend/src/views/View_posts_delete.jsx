import React from 'react'
import { Form_delete } from '../components'
import { useParams } from 'react-router-dom'
import { Nav } from "../components"
import styles from "../style"

const View_posts_delete = () => {
  let {postId} = useParams()
  return (
    <div className={`w-full overflow-hidden`}>
      <div className={` bg-primary ${styles.boxWidth}`}>
        <Nav/>
      </div>
      <Form_delete postId={postId} />
    </div>
  )
}

export default View_posts_delete