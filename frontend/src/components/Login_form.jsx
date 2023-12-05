import React, {useState} from 'react'
//import { useNavigate } from 'react-router-dom';
import { Button, Label, TextInput } from 'flowbite-react'
import { useUserContext } from './UserContext'

const Login_form = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const { login } = useUserContext()
  //const navigate = useNavigate()

  const  handlerSubmit = async () => {
    try {
      const response = await fetch("http://localhost:2026/blog/authentication", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({email, password})
      })
      if (response.ok){
        const data = await response.json();
        const token = data.token
        const userId = data.userId
        console.log(data)
        localStorage.setItem("token", token)
        localStorage.setItem("userId", userId)
        login({userId : userId})
        //navigate('/panel)        
      }
    } catch(e){
      console.error(e);
    }
  }

  return (    
    <div className=' flex flex-col justify-center items-center'>  
    <form className="flex max-w-md flex-col gap-4 w-full justify-center">
    <div>
      <div className="mb-2 block">
        <Label  htmlFor="email" value='Correo electrónico'/>
      </div>
      <TextInput onChange={(e) => setEmail(e.target.value)} id="email" type="email" required />
    </div>
    <div>
      <div className="mb-2 block">
        <Label htmlFor="password" value='Contraseña'/>
      </div>
      <TextInput onChange={(e) => setPassword(e.target.value)}  id="password" type="password" required />
    </div>
    <Button onClick={handlerSubmit} type="submit">Submit</Button>
  </form>
    </div>
);
}

export default Login_form