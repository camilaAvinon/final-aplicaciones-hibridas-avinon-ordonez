import React from "react"
import { Login_form, Nav } from "../components"
import styles from "../style"

const View_login = () => {
    return (
        <div className={`w-full overflow-hidden`}>
            <div className={` bg-primary ${styles.boxWidth}`}>
                <Nav/>
            </div>
            <div className="w-full mt-[2em]">
                <h2 className="text-4xl text-center m-2 p-3">Iniciá sesión</h2>
                <Login_form/>
            </div>
        </div>
    )
}

export default View_login

