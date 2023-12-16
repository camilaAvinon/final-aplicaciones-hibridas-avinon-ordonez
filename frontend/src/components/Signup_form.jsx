import React, { useState } from "react";
import { Button, Label, TextInput } from 'flowbite-react';
import { useNavigate } from "react-router-dom";

const Signup_form = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()

    const handlerSubmit = async (event) => {
        event.preventDefault()
        try {
            await fetch ('http://localhost:2026/blog/users', {
                method: 'POST',
                headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({name, email, password}),
            });
            navigate('/home')
        } catch (e){
            console.log(e);
        }
    }

    return (
    <div className=" flex flex-col justify-center items-center">
    <form className="flex max-w-md flex-col gap-4 justify-center w-full">
        <div>
            <div className="mb-2 block">
                <Label htmlFor="name" value="Nombre"/>
            </div>
            <TextInput onChange={(e) => setName(e.target.value)} id="name" type="text" required shadow />
        </div>
        <div>
            <div className="mb-2 block">
                <Label htmlFor="email" value="Correo electrónico"/>
            </div>
            <TextInput onChange={(e) => setEmail(e.target.value)} id="email2" type="email" required shadow />
        </div>
        <div>
            <div className="mb-2 block">
                <Label htmlFor="password" value="Contraseña" />
            </div>
            <TextInput onChange={(e) => setPassword(e.target.value)} id="password" type="password" required shadow />
        </div>
        <Button onClick={handlerSubmit} type="submit">Registrarme</Button>
    </form>
    </div>
    )
}

export default Signup_form