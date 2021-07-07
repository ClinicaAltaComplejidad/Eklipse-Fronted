import React, { useState, useContext } from 'react';
//librarie
import { Input } from '@chakra-ui/react';

import { DataContext } from '../../context/LoginContext';

function Login() {

    const [userState, setUserState] = useState({
        userName: '',
        pass: ''
    });

    const {setLogin} = useContext( DataContext );

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch('http://localhost:4000/api.v1/eklipse.v2/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                user: userState.userName,
                password: userState.pass
            })
        })
        .then(response => response.json() )
        .then(data => {
            if (data.Message === 'OK') {
                setLogin({
                    login: true,
                });
            }
        })
        .catch(error => console.log(error) );
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