import React, { useState } from 'react';
//librarie
import { Input } from '@chakra-ui/react';

function Login() {

    const [userState, setUserState] = useState({
        userName: '',
        pass: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(userState);
    }

    const handleInput = (e) => {
        setUserState({
            ...userState,
            [e.target.name]: e.target.value
        });
    }

    return (
        <form className="form" onSubmit={handleSubmit}>
            <picture className="form_image_container">
                <img src="#" alt="#" />
            </picture>
            <h1 className="form_title">Log - In</h1>
            <div className="form_input_container">
                <Input
                    onChange={handleInput}
                    name="userName"
                    type="text"
                    variant="flushed"
                    placeholder="Usuario"
                />
            </div>
            <div className="form_input_container">
                <Input
                    onChange={handleInput}
                    name="pass"
                    type="password"
                    variant="flushed"
                    placeholder="Contraseña"
                />
            </div>
            <div className="form_input_container">
                <Input
                    type="submit"
                    value="Ingresar"
                />
            </div>   
        </form>
    )
}

export default Login;