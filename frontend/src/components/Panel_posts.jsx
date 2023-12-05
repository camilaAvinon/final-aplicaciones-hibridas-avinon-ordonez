import React, {useEffect, useState} from 'react'
import { Button, Table } from 'flowbite-react';
import { Link } from 'react-router-dom';

const Panel_posts = () => {
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
        <div className='w-full'>
            {
                posts.map((post) => (
                <Table>
                    <Table.Head>
                    <Table.HeadCell>Título</Table.HeadCell>
                    <Table.HeadCell>Cuerpo</Table.HeadCell>
                    <Table.HeadCell>Categoría</Table.HeadCell>
                    <Table.HeadCell>
                      <span className="sr-only">Editar</span>
                      <span className="sr-only">Borrar</span>
                    </Table.HeadCell>
                  </Table.Head>
                    <Table.Body>
                        <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                            {'Apple MacBook Pro 17"'}
                            </Table.Cell>
                            <Table.Cell>{post.title}</Table.Cell>
                            <Table.Cell>{post.body}</Table.Cell>
                            <Table.Cell>{post.category}</Table.Cell>
                            <Table.Cell>
                            <a href="#" className="font-medium text-cyan-600 hover:underline dark:text-cyan-500">
                            <Link to={`View_posts_update/${post._id}`}>Editar</Link>
                            </a>
                            <a href="#" className="font-medium text-cyan-600 hover:underline dark:text-cyan-500">
                            <Link to={`View_posts_delete/${post._id}`}>Borrar</Link>
                            </a>
                            </Table.Cell>
                        </Table.Row>
                    </Table.Body>    
                </Table>
                ))
            }
        </div>
    );
}

export default Panel_posts