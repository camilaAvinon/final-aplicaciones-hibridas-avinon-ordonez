import React from "react";
import Signup_form from "../components/Signup_form";
import { Nav } from "../components"

import styles from "../style"

const View_signup = () => {
    return (
        <div className={`w-full overflow-hidden`}>
            <div className={` bg-primary ${styles.boxWidth}`}>
                <Nav/>
            </div>
            <div className="w-full mt-[2em]">
                <h2 className="text-4xl text-center m-2 p-3">Registrarme</h2>
                <Signup_form/>

            </div>
        </div>

    )
}

export default View_signup